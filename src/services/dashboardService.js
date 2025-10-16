// Mock dashboard data - in production, use real backend APIs
export const getDashboardStats = async (period = 'today') => {
  try {
    await new Promise(resolve => setTimeout(resolve, 500));

    // Mock data based on period
    const periodData = {
      today: {
        totalBookings: 12,
        totalRevenue: 8500,
        occupancyRate: 65,
        averageRating: 4.8,
        monthlyGrowth: 5.2
      },
      week: {
        totalBookings: 87,
        totalRevenue: 62500,
        occupancyRate: 78,
        averageRating: 4.7,
        monthlyGrowth: 8.1
      },
      month: {
        totalBookings: 387,
        totalRevenue: 278000,
        occupancyRate: 82,
        averageRating: 4.6,
        monthlyGrowth: 12.5
      },
      year: {
        totalBookings: 4678,
        totalRevenue: 3350000,
        occupancyRate: 85,
        averageRating: 4.5,
        monthlyGrowth: 15.3
      }
    };

    return periodData[period] || periodData.today;
  } catch (error) {
    console.error('Error fetching dashboard stats:', error);
    return {
      totalBookings: 0,
      totalRevenue: 0,
      occupancyRate: 0,
      averageRating: 0,
      monthlyGrowth: 0
    };
  }
};

export const getRecentBookings = async () => {
  try {
    await new Promise(resolve => setTimeout(resolve, 300));
    return [
      {
        id: 1,
        guestName: "John Smith",
        roomType: "Deluxe Suite",
        checkIn: "2024-01-15",
        checkOut: "2024-01-18",
        status: "confirmed",
        amount: 1200
      },
      {
        id: 2,
        guestName: "Sarah Johnson",
        roomType: "Executive Room",
        checkIn: "2024-01-16",
        checkOut: "2024-01-20",
        status: "checked-in",
        amount: 1600
      },
      {
        id: 3,
        guestName: "Mike Davis",
        roomType: "Standard Room",
        checkIn: "2024-01-17",
        checkOut: "2024-01-19",
        status: "pending",
        amount: 400
      }
    ];
  } catch (error) {
    console.error('Error fetching recent bookings:', error);
    return [];
  }
};

export const getRoomStatus = async () => {
  try {
    await new Promise(resolve => setTimeout(resolve, 300));
    return [
      { roomNumber: "101", status: "occupied", type: "Standard" },
      { roomNumber: "102", status: "available", type: "Standard" },
      { roomNumber: "201", status: "occupied", type: "Deluxe" },
      { roomNumber: "202", status: "maintenance", type: "Deluxe" },
      { roomNumber: "301", status: "available", type: "Suite" },
      { roomNumber: "302", status: "occupied", type: "Suite" }
    ];
  } catch (error) {
    console.error('Error fetching room status:', error);
    return [];
  }
};

export const getSystemStatus = async () => {
  try {
    await new Promise(resolve => setTimeout(resolve, 300));
    return {
      serverStatus: "online",
      databaseStatus: "healthy",
      apiStatus: "operational",
      lastBackup: "2024-01-14 02:00 AM",
      uptime: "99.9%"
    };
  } catch (error) {
    console.error('Error fetching system status:', error);
    return {
      serverStatus: "unknown",
      databaseStatus: "unknown",
      apiStatus: "unknown",
      lastBackup: "unknown",
      uptime: "unknown"
    };
  }
};

export const getDashboardData = async (period = 'today') => {
  try {
    const [stats, recentBookings, roomStatus, systemStatus] = await Promise.all([
      getDashboardStats(period),
      getRecentBookings(),
      getRoomStatus(),
      getSystemStatus()
    ]);
    return { stats, recentBookings, roomStatus, systemStatus };
  } catch (error) {
    console.error('Error fetching dashboard data:', error);
    return { stats: {}, recentBookings: [], roomStatus: [], systemStatus: {} };
  }
};
