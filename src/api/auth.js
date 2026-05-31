


import axios from "axios";

const BASE = "http://localhost:5000/api";

const getHeaders = () => ({
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});

export const loginUser      = (data) => axios.post(`${BASE}/auth/login`,            data);
export const registerUser   = (data) => axios.post(`${BASE}/auth/register`,         data);

export const setGoal        = (data) => axios.post(`${BASE}/goal/set`,              data, getHeaders());
export const getGoal        = ()     => axios.get(`${BASE}/goal/get`,                     getHeaders());
export const getDietPlan    = ()     => axios.get(`${BASE}/goal/diet-plan`,               getHeaders());

export const saveActivity     = (data) => axios.post(`${BASE}/activity/save`,       data, getHeaders());
export const getTodayActivity = ()     => axios.get(`${BASE}/activity/today`,             getHeaders());
export const getWeeklyProgress= ()     => axios.get(`${BASE}/activity/weekly`,            getHeaders());

export const changePassword = (data) => axios.post(`${BASE}/auth/change-password`,  data, getHeaders());
export const resetAllData   = ()     => axios.delete(`${BASE}/goal/reset-all`,            getHeaders());

export const getFoods       = ()     => axios.get(`${BASE}/food`);
export const searchFood     = (query)=> axios.get(`${BASE}/food/search?q=${query}`);


export const getNotifications  = ()      => axios.get(`${BASE}/notification/all`,           getHeaders());
export const getUnreadCount    = ()      => axios.get(`${BASE}/notification/unread-count`,   getHeaders());
export const markReadOne       = (id)    => axios.patch(`${BASE}/notification/read/${id}`,   {}, getHeaders());
export const markReadAll       = ()      => axios.patch(`${BASE}/notification/read-all`,     {}, getHeaders());
export const deleteNotification= (id)    => axios.delete(`${BASE}/notification/${id}`,       getHeaders());