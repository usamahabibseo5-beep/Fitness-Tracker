


import React, { useState } from "react";
import { useAppContext } from "../context/AppContext";
import {
  User, Mail, Bell, Moon, Shield, Save,
  Trash2, ChevronRight, Check, AlertTriangle,
  Lock, Eye, EyeOff, X
} from "lucide-react";
import { changePassword, resetAllData } from "../api/auth";
import "../styles/global1.css";

const Settings = () => {
  const { user, login } = useAppContext();

  const [name, setName] = useState(user?.name || "");
  const [email, setEmail] = useState(user?.email || "");
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);
  const [saveStatus, setSaveStatus] = useState(null);
  const [showResetConfirm, setShowResetConfirm] = useState(false);
  const [resetStatus, setResetStatus] = useState(null);

  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [passwordStatus, setPasswordStatus] = useState(null);
  const [passwordError, setPasswordError] = useState("");

  const handleSave = async () => {
    setSaveStatus("saving");
    try {
      login({ ...user, name, email });
      setSaveStatus("saved");
      setTimeout(() => setSaveStatus(null), 2500);
    } catch (e) {
      setSaveStatus("error");
      setTimeout(() => setSaveStatus(null), 2500);
    }
  };

  const handleReset = async () => {
    setResetStatus("loading");
    try {
      await resetAllData();
      localStorage.removeItem("foodItems");
      localStorage.removeItem("todaySteps");
      localStorage.removeItem("waterIntake");
      setResetStatus("done");
      setShowResetConfirm(false);
      setTimeout(() => setResetStatus(null), 3000);
    } catch (e) {
      setResetStatus("error");
      setTimeout(() => setResetStatus(null), 3000);
    }
  };

  const handleChangePassword = async () => {
    setPasswordError("");
    if (!currentPassword || !newPassword || !confirmPassword) {
      setPasswordError("All fields are required.");
      return;
    }
    if (newPassword.length < 6) {
      setPasswordError("New password must be at least 6 characters.");
      return;
    }
    if (newPassword !== confirmPassword) {
      setPasswordError("New passwords do not match.");
      return;
    }
    setPasswordStatus("loading");
    try {
      await changePassword({ currentPassword, newPassword });
      setPasswordStatus("success");
      setTimeout(() => {
        setShowPasswordModal(false);
        setPasswordStatus(null);
        setCurrentPassword("");
        setNewPassword("");
        setConfirmPassword("");
      }, 1800);
    } catch (err) {
      setPasswordError(
        err?.response?.data?.message || "Something went wrong. Please try again."
      );
      setPasswordStatus("error");
      setTimeout(() => setPasswordStatus(null), 300);
    }
  };

  const closeModal = () => {
    setShowPasswordModal(false);
    setCurrentPassword("");
    setNewPassword("");
    setConfirmPassword("");
    setPasswordError("");
    setPasswordStatus(null);
  };

  return (
    <div className="settings-page">

      <div className="settings-blob settings-blob-1" />
      <div className="settings-blob settings-blob-2" />
      <div className="settings-blob settings-blob-3" />

      {/* PASSWORD MODAL */}
      {showPasswordModal && (
        <div className="settings-modal-overlay">
          <div className="settings-modal">
            <div className="settings-modal-header">
              <div className="settings-modal-title">
                <div className="settings-modal-icon">
                  <Lock size={16} color="#818cf8" />
                </div>
                <span>Change Password</span>
              </div>
              <button className="settings-modal-close" onClick={closeModal}>
                <X size={16} color="#94a3b8" />
              </button>
            </div>

            {[
              { label: "Current Password", val: currentPassword, set: setCurrentPassword, show: showCurrent, toggle: () => setShowCurrent(!showCurrent) },
              { label: "New Password",     val: newPassword,     set: setNewPassword,     show: showNew,     toggle: () => setShowNew(!showNew) },
              { label: "Confirm Password", val: confirmPassword, set: setConfirmPassword, show: showConfirm, toggle: () => setShowConfirm(!showConfirm) },
            ].map((field, i) => (
              <div key={i} className="settings-field">
                <div className="settings-label">{field.label}</div>
                <div className="settings-input-wrap">
                  <input
                    type={field.show ? "text" : "password"}
                    value={field.val}
                    onChange={e => field.set(e.target.value)}
                    placeholder="••••••••"
                    className="settings-input settings-input-password"
                  />
                  <button className="settings-eye-btn" onClick={field.toggle}>
                    {field.show
                      ? <EyeOff size={16} color="#64748b" />
                      : <Eye size={16} color="#64748b" />}
                  </button>
                </div>
              </div>
            ))}

            {passwordError && (
              <div className="settings-error">
                <AlertTriangle size={14} />
                {passwordError}
              </div>
            )}

            <button
              onClick={handleChangePassword}
              disabled={passwordStatus === "loading"}
              className={`settings-submit-btn ${passwordStatus === "success" ? "success" : ""}`}
            >
              {passwordStatus === "loading" ? (
                <><div className="settings-spinner" />Updating...</>
              ) : passwordStatus === "success" ? (
                <><Check size={18} />Password Updated!</>
              ) : (
                <><Lock size={16} />Update Password</>
              )}
            </button>
          </div>
        </div>
      )}

      <div className="settings-wrap">

        {/* PAGE TITLE */}
        <div className="settings-page-title">
          <Shield size={22} color="#818cf8" />
          Settings
        </div>

        {/* PROFILE */}
        <div className="settings-card">
          <div className="settings-card-title">
            <User size={16} color="#818cf8" />
            Profile
          </div>
          <div className="settings-field">
            <div className="settings-label">Full Name</div>
            <input
              className="settings-input"
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder="Your name"
            />
          </div>
          <div className="settings-field">
            <div className="settings-label">Email Address</div>
            <div className="settings-input-wrap">
              <Mail size={14} color="#64748b" className="settings-input-icon" />
              <input
                className="settings-input settings-input-icon-pad"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="your@email.com"
              />
            </div>
          </div>
        </div>

        {/* PREFERENCES */}
        <div className="settings-card">
          <div className="settings-card-title">
            <Bell size={16} color="#818cf8" />
            Preferences
          </div>

          <div className="settings-toggle-row settings-toggle-row-border">
            <div>
              <div className="settings-toggle-label">Notifications</div>
              <div className="settings-toggle-desc">Workout reminders & daily updates</div>
            </div>
            <div
              className={`settings-toggle ${notifications ? "on" : ""}`}
              onClick={() => setNotifications(!notifications)}
            >
              <div className="settings-toggle-dot" />
            </div>
          </div>

          <div className="settings-toggle-row">
            <div>
              <div className="settings-toggle-label">Dark Mode</div>
              <div className="settings-toggle-desc">Switch app appearance</div>
            </div>
            <div
              className={`settings-toggle ${darkMode ? "on" : ""}`}
              onClick={() => setDarkMode(!darkMode)}
            >
              <div className="settings-toggle-dot" />
            </div>
          </div>
        </div>

        {/* SECURITY */}
        <div className="settings-card">
          <div className="settings-card-title">
            <Shield size={16} color="#818cf8" />
            Security
          </div>
          <button
            className="settings-row-btn"
            onClick={() => setShowPasswordModal(true)}
          >
            <div className="settings-row-btn-left">
              <Lock size={15} color="#818cf8" />
              <span>Change Password</span>
            </div>
            <ChevronRight size={16} color="#64748b" />
          </button>
        </div>

        {/* SAVE */}
        <button
          onClick={handleSave}
          disabled={saveStatus === "saving"}
          className={`settings-save-btn ${saveStatus === "saved" ? "saved" : saveStatus === "error" ? "error" : ""}`}
        >
          {saveStatus === "saving" ? (
            <><div className="settings-spinner" />Saving...</>
          ) : saveStatus === "saved" ? (
            <><Check size={18} />Changes Saved!</>
          ) : saveStatus === "error" ? (
            "Failed — Try Again"
          ) : (
            <><Save size={18} />Save Changes</>
          )}
        </button>

    {/* ================= DANGER ZONE FINAL JSX ================= */}

<div className="settings-card settings-danger-card">

  <div className="settings-card-title settings-danger-title">
    <Trash2 size={16} color="#f87171" />
    Danger Zone
  </div>

  {/* TOP ROW */}
  <div className="settings-toggle-row">

    <div>
      <div className="settings-toggle-label">
        Reset All Data
      </div>

      <div className="settings-toggle-desc">
        Goals, targets, activity & progress
      </div>
    </div>

    {!showResetConfirm && (
      <button
        className="settings-reset-btn"
        onClick={() => setShowResetConfirm(true)}
      >
        Reset
      </button>
    )}

  </div>

  {/* EXPAND SECTION */}
  <div
    className={`settings-reset-confirm-box ${
      showResetConfirm ? "show" : ""
    }`}
  >

    <div className="settings-warning-box">

      <AlertTriangle
        size={16}
        color="#f87171"
        style={{
          flexShrink: 0,
          marginTop: 1
        }}
      />

      <p>
        This will permanently delete all your goals,
        targets, activity and progress.
        This action cannot be undone.
      </p>

    </div>

    <div className="settings-confirm-btns">

      <button
        className="settings-cancel-btn"
        onClick={() => setShowResetConfirm(false)}
      >
        Cancel
      </button>

      <button
        className="settings-confirm-reset-btn"
        onClick={handleReset}
        disabled={resetStatus === "loading"}
      >

        {resetStatus === "loading" ? (
          <>
            <div className="settings-spinner" />
            Resetting...
          </>
        ) : (
          <>
            <Trash2 size={15} />
            Yes, Reset All
          </>
        )}

      </button>

    </div>

  </div>

  {/* SUCCESS MESSAGE */}
  {resetStatus === "done" && (
    <div className="settings-success-msg">
      <Check size={14} />
      All data has been reset successfully.
    </div>
  )}

</div>

      </div>
    </div>
  );
};

export default Settings;