import React, { useState, useEffect } from "react";
import "../styles/global1.css"
import {
  getNotifications,
  markReadOne,
  markReadAll,
  deleteNotification,
} from "../api/auth";


const Notifications = () => {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading]             = useState(true);
  const [filter, setFilter]               = useState("all");

  useEffect(() => {
    fetchNotifications();
  }, []);

  const fetchNotifications = async () => {
    try {
      const res = await getNotifications();
      setNotifications(res.data.notifications || []);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleReadOne = async (id) => {
    await markReadOne(id);
    setNotifications((prev) =>
      prev.map((n) => (n._id === id ? { ...n, isRead: true } : n))
    );
  };

  const handleReadAll = async () => {
    await markReadAll();
    setNotifications((prev) => prev.map((n) => ({ ...n, isRead: true })));
  };

  const handleDelete = async (id) => {
    await deleteNotification(id);
    setNotifications((prev) => prev.filter((n) => n._id !== id));
  };

  const filtered = notifications.filter((n) => {
    if (filter === "unread") return !n.isRead;
    if (filter === "daily")  return n.type === "daily";
    if (filter === "weekly") return n.type === "weekly";
    return true;
  });

  const unreadCount = notifications.filter((n) => !n.isRead).length;

  const formatTime = (dateStr) => {
    const date = new Date(dateStr);
    const now  = new Date();
    const diff = Math.floor((now - date) / 1000 / 60);
    if (diff < 1)   return "Just now";
    if (diff < 60)  return `${diff}m ago`;
    if (diff < 1440)return `${Math.floor(diff / 60)}h ago`;
    return `${Math.floor(diff / 1440)}d ago`;
  };

  if (loading) {
    return (
      <div className="notif-loading">
        <div className="notif-spinner" />
        <span>Loading notifications...</span>
      </div>
    );
  }

  return (
    <div className="notif-page">

      {/* HEADER */}
      <div className="notif-header">
        <div className="notif-header-left">
          <h2 className="notif-title">Notifications</h2>
          {unreadCount > 0 && (
            <span className="notif-unread-badge">{unreadCount} new</span>
          )}
        </div>
        {unreadCount > 0 && (
          <button className="notif-read-all-btn" onClick={handleReadAll}>
            Mark all as read
          </button>
        )}
      </div>

      {/* FILTER TABS */}
      <div className="notif-filters">
        {["all", "unread", "daily", "weekly"].map((f) => (
          <button
            key={f}
            className={`notif-filter-btn ${filter === f ? "active" : ""}`}
            onClick={() => setFilter(f)}
          >
            {f.charAt(0).toUpperCase() + f.slice(1)}
          </button>
        ))}
      </div>

      {/* NOTIFICATIONS LIST */}
      {filtered.length === 0 ? (
        <div className="notif-empty">
          <div className="notif-empty-icon">🔔</div>
          <p>No notifications here</p>
        </div>
      ) : (
        <div className="notif-list">
          {filtered.map((notif) => (
            <div
              key={notif._id}
              className={`notif-item ${!notif.isRead ? "unread" : ""} ${notif.type}`}
              onClick={() => !notif.isRead && handleReadOne(notif._id)}
            >
              {/* Icon */}
              <div className="notif-icon-wrap">
                {notif.type === "weekly" ? "📊" : "⏰"}
              </div>

              {/* Content */}
              <div className="notif-content">
                <div className="notif-item-header">
                  <span className="notif-item-title">{notif.title}</span>
                  <span className="notif-time">{formatTime(notif.createdAt)}</span>
                </div>
                <p className="notif-message">{notif.message}</p>
                <span className={`notif-type-badge ${notif.type}`}>
                  {notif.type === "weekly" ? "Weekly Report" : "Daily Reminder"}
                </span>
              </div>

              {/* Unread dot */}
              {!notif.isRead && <div className="notif-dot" />}

              {/* Delete button */}
              <button
                className="notif-delete-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  handleDelete(notif._id);
                }}
              >
                ✕
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Notifications;