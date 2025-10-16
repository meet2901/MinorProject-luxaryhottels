import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useAuth } from '../context/AuthContext';
import Button from '../components/Button';
import ProtectedRoute from '../components/ProtectedRoute';
import { getDashboardData } from '../services/dashboardService';

const DashboardContainer = styled.div`
  min-height: 100vh;
  background: #f8f9fa;
  padding: var(--space-2xl) var(--space-md);

  @media (max-width: 768px) {
    padding: var(--space-xl) var(--space-md);
  }
`;

const DashboardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--space-2xl);

  @media (max-width: 768px) {
    flex-direction: column;
    gap: var(--space-lg);
    text-align: center;
  }

  h1 {
    font-size: 2.5rem;
    color: #333;
    font-weight: 700;
    margin: 0;
  }

  p {
    color: #666;
    font-size: 1.125rem;
    margin: 0;
  }
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: var(--space-xl);
  margin-bottom: var(--space-2xl);

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: var(--space-lg);
  }
`;

const StatCard = styled.div`
  background: white;
  border-radius: 16px;
  padding: var(--space-2xl);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border-left: 4px solid ${props => props.color || '#ED6D05'};
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-2px);
  }

  .stat-number {
    font-size: 2.5rem;
    font-weight: 700;
    color: ${props => props.color || '#ED6D05'};
    margin-bottom: var(--space-sm);
  }

  .stat-label {
    font-size: 1.125rem;
    color: #333;
    font-weight: 600;
    margin-bottom: var(--space-xs);
  }

  .stat-description {
    color: #666;
    font-size: 0.9rem;
  }
`;

const DashboardGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: var(--space-2xl);
  margin-bottom: var(--space-2xl);

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

const ChartsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: var(--space-xl);
  margin-bottom: var(--space-2xl);

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ChartCard = styled.div`
  background: white;
  border-radius: 16px;
  padding: var(--space-2xl);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

  h3 {
    font-size: 1.375rem;
    color: #333;
    margin-bottom: var(--space-lg);
    font-weight: 600;
    display: flex;
    align-items: center;
    gap: var(--space-sm);

    svg {
      width: 20px;
      height: 20px;
      color: #ED6D05;
    }
  }
`;

const RevenueChart = styled.div`
  .chart-placeholder {
    height: 200px;
    background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #666;
    font-weight: 500;
  }

  .revenue-bars {
    display: flex;
    align-items: end;
    justify-content: space-between;
    height: 200px;
    padding: var(--space-lg);
    background: #f8f9fa;
    border-radius: 8px;

    .bar {
      flex: 1;
      margin: 0 2px;
      background: linear-gradient(to top, #ED6D05, #FF9A3C);
      border-radius: 4px 4px 0 0;
      position: relative;
      min-height: 20px;

      &::after {
        content: attr(data-value);
        position: absolute;
        top: -25px;
        left: 50%;
        transform: translateX(-50%);
        font-size: 0.75rem;
        font-weight: 600;
        color: #333;
      }
    }
  }
`;

const OccupancyChart = styled.div`
  .occupancy-circle {
    width: 150px;
    height: 150px;
    margin: 0 auto var(--space-lg);
    border-radius: 50%;
    background: conic-gradient(#ED6D05 0% 75%, #e9ecef 75% 100%);
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;

    &::after {
      content: '75%';
      position: absolute;
      font-size: 1.5rem;
      font-weight: 700;
      color: #333;
    }
  }

  .occupancy-legend {
    display: flex;
    justify-content: center;
    gap: var(--space-lg);

    .legend-item {
      display: flex;
      align-items: center;
      gap: var(--space-xs);

      &::before {
        content: '';
        width: 12px;
        height: 12px;
        border-radius: 50%;
        background: ${props => props.color};
      }
    }
  }
`;

const TopRooms = styled.div`
  .room-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: var(--space-md) 0;
    border-bottom: 1px solid #f0f0f0;

    &:last-child {
      border-bottom: none;
    }

    .room-info {
      display: flex;
      align-items: center;
      gap: var(--space-md);

      .room-avatar {
        width: 40px;
        height: 40px;
        border-radius: 8px;
        background: linear-gradient(135deg, #ED6D05, #FF9A3C);
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        font-weight: 600;
        font-size: 0.875rem;
      }

      .room-details {
        .room-name {
          font-weight: 600;
          color: #333;
          margin-bottom: var(--space-xs);
        }

        .room-stats {
          color: #666;
          font-size: 0.875rem;
        }
      }
    }

    .room-revenue {
      font-weight: 600;
      color: #ED6D05;
    }
  }
`;

const GuestFeedback = styled.div`
  .feedback-item {
    padding: var(--space-md) 0;
    border-bottom: 1px solid #f0f0f0;

    &:last-child {
      border-bottom: none;
    }

    .feedback-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: var(--space-sm);

      .guest-name {
        font-weight: 600;
        color: #333;
      }

      .rating {
        display: flex;
        gap: 2px;

        .star {
          width: 16px;
          height: 16px;
          color: #ffc107;
          fill: currentColor;
        }
      }
    }

    .feedback-text {
      color: #666;
      font-size: 0.9rem;
      line-height: 1.4;
    }
  }
`;

const NotificationsPanel = styled.div`
  background: white;
  border-radius: 16px;
  padding: var(--space-2xl);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

  h3 {
    font-size: 1.375rem;
    color: #333;
    margin-bottom: var(--space-lg);
    font-weight: 600;
    display: flex;
    align-items: center;
    gap: var(--space-sm);

    svg {
      width: 20px;
      height: 20px;
      color: #ED6D05;
    }
  }

  .notification-item {
    display: flex;
    gap: var(--space-md);
    padding: var(--space-md) 0;
    border-bottom: 1px solid #f0f0f0;

    &:last-child {
      border-bottom: none;
    }

    .notification-icon {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background: ${props => props.color || '#ED6D05'};
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      flex-shrink: 0;

      svg {
        width: 20px;
        height: 20px;
      }
    }

    .notification-content {
      flex: 1;

      .notification-title {
        font-weight: 600;
        color: #333;
        margin-bottom: var(--space-xs);
      }

      .notification-message {
        color: #666;
        font-size: 0.9rem;
        line-height: 1.4;
      }

      .notification-time {
        color: #999;
        font-size: 0.8rem;
        margin-top: var(--space-xs);
      }
    }
  }
`;

const ActivityFeed = styled.div`
  background: white;
  border-radius: 16px;
  padding: var(--space-2xl);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

  h3 {
    font-size: 1.375rem;
    color: #333;
    margin-bottom: var(--space-lg);
    font-weight: 600;
    display: flex;
    align-items: center;
    gap: var(--space-sm);

    svg {
      width: 20px;
      height: 20px;
      color: #ED6D05;
    }
  }

  .activity-item {
    display: flex;
    gap: var(--space-md);
    padding: var(--space-md) 0;
    border-bottom: 1px solid #f0f0f0;

    &:last-child {
      border-bottom: none;
    }

    .activity-icon {
      width: 32px;
      height: 32px;
      border-radius: 50%;
      background: ${props => props.color || '#ED6D05'};
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      flex-shrink: 0;

      svg {
        width: 16px;
        height: 16px;
      }
    }

    .activity-content {
      flex: 1;

      .activity-text {
        color: #333;
        font-size: 0.9rem;
        line-height: 1.4;
        margin-bottom: var(--space-xs);
      }

      .activity-time {
        color: #999;
        font-size: 0.8rem;
      }
    }
  }
`;

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-xl);
`;

const SectionCard = styled.div`
  background: white;
  border-radius: 16px;
  padding: var(--space-2xl);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

  h3 {
    font-size: 1.5rem;
    color: #333;
    margin-bottom: var(--space-lg);
    font-weight: 600;
    display: flex;
    align-items: center;
    gap: var(--space-sm);

    svg {
      width: 24px;
      height: 24px;
      color: #ED6D05;
    }
  }
`;

const RecentBookings = styled.div`
  .booking-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: var(--space-md) 0;
    border-bottom: 1px solid #f0f0f0;

    &:last-child {
      border-bottom: none;
    }

    .booking-info {
      flex: 1;

      .guest-name {
        font-weight: 600;
        color: #333;
        margin-bottom: var(--space-xs);
      }

      .booking-details {
        color: #666;
        font-size: 0.9rem;
      }
    }

    .booking-status {
      padding: var(--space-xs) var(--space-md);
      border-radius: 20px;
      font-size: 0.875rem;
      font-weight: 500;
      text-transform: capitalize;

      &.confirmed {
        background: #d4edda;
        color: #155724;
      }

      &.pending {
        background: #fff3cd;
        color: #856404;
      }

      &.cancelled {
        background: #f8d7da;
        color: #721c24;
      }
    }
  }
`;

const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-xl);
`;

const QuickActions = styled.div`
  background: white;
  border-radius: 16px;
  padding: var(--space-2xl);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

  h3 {
    font-size: 1.5rem;
    color: #333;
    margin-bottom: var(--space-lg);
    font-weight: 600;
  }

  .action-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: var(--space-md);
  }
`;

const ActionButton = styled.button`
  display: flex;
  align-items: center;
  gap: var(--space-sm);
  padding: var(--space-md);
  border: 2px solid #e9ecef;
  border-radius: 12px;
  background: white;
  color: #333;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  text-align: left;

  &:hover {
    border-color: #ED6D05;
    background: rgba(237, 109, 5, 0.05);
  }

  svg {
    width: 20px;
    height: 20px;
    color: #ED6D05;
    flex-shrink: 0;
  }
`;

const SystemStatus = styled.div`
  background: white;
  border-radius: 16px;
  padding: var(--space-2xl);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

  h3 {
    font-size: 1.5rem;
    color: #333;
    margin-bottom: var(--space-lg);
    font-weight: 600;
  }

  .status-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: var(--space-md) 0;
    border-bottom: 1px solid #f0f0f0;

    &:last-child {
      border-bottom: none;
    }

    .status-label {
      font-weight: 500;
      color: #333;
    }

    .status-value {
      padding: var(--space-xs) var(--space-md);
      border-radius: 20px;
      font-size: 0.875rem;
      font-weight: 500;

      &.online {
        background: #d4edda;
        color: #155724;
      }

      &.offline {
        background: #f8d7da;
        color: #721c24;
      }

      &.warning {
        background: #fff3cd;
        color: #856404;
      }
    }
  }
`;

function Dashboard() {
  const { user } = useAuth();
  const [selectedPeriod, setSelectedPeriod] = useState('today');
  const [dashboardData, setDashboardData] = useState({
    stats: {},
    recentBookings: [],
    roomStatus: [],
    systemStatus: {}
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        setLoading(true);
        const data = await getDashboardData(selectedPeriod);
        setDashboardData(data);
      } catch (err) {
        setError('Failed to load dashboard data');
        console.error('Error fetching dashboard data:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, [selectedPeriod]);

  if (loading) {
    return (
      <DashboardContainer>
        <div style={{ textAlign: 'center', padding: 'var(--space-3xl)' }}>
          Loading dashboard...
        </div>
      </DashboardContainer>
    );
  }

  if (error) {
    return (
      <DashboardContainer>
        <div style={{ textAlign: 'center', padding: 'var(--space-3xl)', color: 'red' }}>
          {error}
        </div>
      </DashboardContainer>
    );
  }



  // Compute room status counts
  const roomCounts = dashboardData.roomStatus.reduce((acc, room) => {
    if (room.status === 'available') acc.available++;
    if (room.status === 'occupied') acc.occupied++;
    if (room.status === 'maintenance') acc.maintenance++;
    return acc;
  }, { available: 0, occupied: 0, maintenance: 0 });

  // System status items
  const systemStatusItems = [
    { label: 'Server Status', value: dashboardData.systemStatus.serverStatus || 'unknown', class: 'online' },
    { label: 'Database Status', value: dashboardData.systemStatus.databaseStatus || 'unknown', class: 'online' },
    { label: 'API Status', value: dashboardData.systemStatus.apiStatus || 'unknown', class: 'online' },
    { label: 'Last Backup', value: dashboardData.systemStatus.lastBackup || 'unknown', class: 'warning' }
  ];

  return (
    <DashboardContainer>
      <DashboardHeader>
        <div>
          <h1>Admin Dashboard</h1>
          <p>Welcome back, {user.name}. Here's what's happening with your hotel.</p>
        </div>
        <div>
          <select
            value={selectedPeriod}
            onChange={(e) => setSelectedPeriod(e.target.value)}
            style={{
              padding: 'var(--space-sm) var(--space-md)',
              border: '2px solid #e9ecef',
              borderRadius: '8px',
              fontSize: '1rem'
            }}
          >
            <option value="today">Today</option>
            <option value="week">This Week</option>
            <option value="month">This Month</option>
            <option value="year">This Year</option>
          </select>
        </div>
      </DashboardHeader>

      <StatsGrid>
        <StatCard color="#28a745">
          <div className="stat-number">{dashboardData.stats.totalBookings?.toLocaleString() || 0}</div>
          <div className="stat-label">Total Bookings</div>
          <div className="stat-description">+{dashboardData.stats.monthlyGrowth || 0}% from last month</div>
        </StatCard>

        <StatCard color="#007bff">
          <div className="stat-number">₹{dashboardData.stats.totalRevenue?.toLocaleString() || 0}</div>
          <div className="stat-label">Revenue</div>
          <div className="stat-description">+8% from last month</div>
        </StatCard>

        <StatCard color="#ffc107">
          <div className="stat-number">{dashboardData.stats.occupancyRate || 0}%</div>
          <div className="stat-label">Occupancy Rate</div>
          <div className="stat-description">+3% from last month</div>
        </StatCard>

        <StatCard color="#e74c3c">
          <div className="stat-number">{dashboardData.stats.averageRating || 0}</div>
          <div className="stat-label">Average Rating</div>
          <div className="stat-description">Out of 5 stars</div>
        </StatCard>
      </StatsGrid>

      <ChartsGrid>
        <ChartCard>
          <h3>
            <svg fill="currentColor" viewBox="0 0 20 20">
              <path d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" />
            </svg>
            Revenue Trend
          </h3>
          <RevenueChart>
            <div className="revenue-bars">
              <div className="bar" style={{ height: '40%' }} data-value="₹12k"></div>
              <div className="bar" style={{ height: '60%' }} data-value="₹18k"></div>
              <div className="bar" style={{ height: '80%' }} data-value="₹24k"></div>
              <div className="bar" style={{ height: '55%' }} data-value="₹16.5k"></div>
              <div className="bar" style={{ height: '70%' }} data-value="₹21k"></div>
              <div className="bar" style={{ height: '90%' }} data-value="₹27k"></div>
              <div className="bar" style={{ height: '100%' }} data-value="₹30k"></div>
            </div>
          </RevenueChart>
        </ChartCard>

        <ChartCard>
          <h3>
            <svg fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm0 4a1 1 0 011-1h12a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1V8z" clipRule="evenodd" />
            </svg>
            Occupancy Rate
          </h3>
          <OccupancyChart>
            <div className="occupancy-circle"></div>
            <div className="occupancy-legend">
              <div className="legend-item" style={{ '--color': '#ED6D05' }}>Occupied</div>
              <div className="legend-item" style={{ '--color': '#e9ecef' }}>Available</div>
            </div>
          </OccupancyChart>
        </ChartCard>
      </ChartsGrid>

      <DashboardGrid>
        <MainContent>
          <SectionCard>
            <h3>
              <svg fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
              </svg>
              Recent Bookings
            </h3>
            <RecentBookings>
              {dashboardData.recentBookings.map(booking => (
                <div key={booking.id} className="booking-item">
                  <div className="booking-info">
                    <div className="guest-name">{booking.guestName}</div>
                    <div className="booking-details">
                      {booking.roomType} • {booking.checkIn} to {booking.checkOut}
                    </div>
                  </div>
                  <div className={`booking-status ${booking.status}`}>
                    {booking.status}
                  </div>
                </div>
              ))}
            </RecentBookings>
          </SectionCard>

          <SectionCard>
            <h3>
              <svg fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Room Status Overview
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 'var(--space-md)' }}>
              <div style={{ textAlign: 'center', padding: 'var(--space-lg)', background: '#f8f9fa', borderRadius: '12px' }}>
                <div style={{ fontSize: '2rem', fontWeight: '700', color: '#28a745' }}>{roomCounts.available}</div>
                <div style={{ color: '#666' }}>Available</div>
              </div>
              <div style={{ textAlign: 'center', padding: 'var(--space-lg)', background: '#f8f9fa', borderRadius: '12px' }}>
                <div style={{ fontSize: '2rem', fontWeight: '700', color: '#e74c3c' }}>{roomCounts.occupied}</div>
                <div style={{ color: '#666' }}>Occupied</div>
              </div>
              <div style={{ textAlign: 'center', padding: 'var(--space-lg)', background: '#f8f9fa', borderRadius: '12px' }}>
                <div style={{ fontSize: '2rem', fontWeight: '700', color: '#ffc107' }}>{roomCounts.maintenance}</div>
                <div style={{ color: '#666' }}>Maintenance</div>
              </div>
            </div>
          </SectionCard>

          <SectionCard>
            <h3>
              <svg fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
              </svg>
              Top Performing Rooms
            </h3>
            <TopRooms>
              {[
                { id: 1, name: 'Presidential Suite', bookings: 45, revenue: '₹67,500' },
                { id: 2, name: 'Ocean View Deluxe', bookings: 38, revenue: '₹45,600' },
                { id: 3, name: 'Executive Suite', bookings: 32, revenue: '₹38,400' },
                { id: 4, name: 'Family Suite', bookings: 28, revenue: '₹50,400' },
                { id: 5, name: 'Penthouse Suite', bookings: 22, revenue: '₹118,800' }
              ].map(room => (
                <div key={room.id} className="room-item">
                  <div className="room-info">
                    <div className="room-avatar">{room.id}</div>
                    <div className="room-details">
                      <div className="room-name">{room.name}</div>
                      <div className="room-stats">{room.bookings} bookings</div>
                    </div>
                  </div>
                  <div className="room-revenue">{room.revenue}</div>
                </div>
              ))}
            </TopRooms>
          </SectionCard>

          <SectionCard>
            <h3>
              <svg fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              Guest Feedback
            </h3>
            <GuestFeedback>
              {[
                { id: 1, name: 'Sarah Johnson', rating: 5, feedback: 'Exceptional service and beautiful rooms. The staff went above and beyond to make our stay memorable.' },
                { id: 2, name: 'Michael Chen', rating: 4, feedback: 'Great location and amenities. The breakfast was outstanding, though the WiFi could be faster.' },
                { id: 3, name: 'Emma Rodriguez', rating: 5, feedback: 'Perfect romantic getaway. The spa facilities were amazing and the room was spotless.' },
                { id: 4, name: 'David Thompson', rating: 4, feedback: 'Excellent value for money. The pool area was fantastic and the concierge was very helpful.' }
              ].map(feedback => (
                <div key={feedback.id} className="feedback-item">
                  <div className="feedback-header">
                    <span className="guest-name">{feedback.name}</span>
                    <div className="rating">
                      {[...Array(feedback.rating)].map((_, i) => (
                        <svg key={i} className="star" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                  <div className="feedback-text">{feedback.feedback}</div>
                </div>
              ))}
            </GuestFeedback>
          </SectionCard>
        </MainContent>

        <Sidebar>
          <NotificationsPanel>
            <h3>
              <svg fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" clipRule="evenodd" />
              </svg>
              Notifications
            </h3>
            <div className="notification-item">
              <div className="notification-icon" style={{ background: '#28a745' }}>
                <svg fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="notification-content">
                <div className="notification-title">New Booking Confirmed</div>
                <div className="notification-message">Sarah Johnson booked the Presidential Suite for 3 nights</div>
                <div className="notification-time">2 minutes ago</div>
              </div>
            </div>

            <div className="notification-item">
              <div className="notification-icon" style={{ background: '#ffc107' }}>
                <svg fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="notification-content">
                <div className="notification-title">Maintenance Required</div>
                <div className="notification-message">Room 205 air conditioning needs servicing</div>
                <div className="notification-time">1 hour ago</div>
              </div>
            </div>

            <div className="notification-item">
              <div className="notification-icon" style={{ background: '#17a2b8' }}>
                <svg fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="notification-content">
                <div className="notification-title">Guest Feedback</div>
                <div className="notification-message">Emma left a 5-star review for her stay</div>
                <div className="notification-time">3 hours ago</div>
              </div>
            </div>
          </NotificationsPanel>

          <ActivityFeed>
            <h3>
              <svg fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm0 4a1 1 0 011-1h12a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1V8z" clipRule="evenodd" />
              </svg>
              Recent Activity
            </h3>
            <div className="activity-item">
              <div className="activity-icon" style={{ background: '#28a745' }}>
                <svg fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="activity-content">
                <div className="activity-text">Check-out completed for Room 301</div>
                <div className="activity-time">5 minutes ago</div>
              </div>
            </div>

            <div className="activity-item">
              <div className="activity-icon" style={{ background: '#007bff' }}>
                <svg fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="activity-content">
                <div className="activity-text">New booking created for Family Suite</div>
                <div className="activity-time">12 minutes ago</div>
              </div>
            </div>

            <div className="activity-item">
              <div className="activity-icon" style={{ background: '#ffc107' }}>
                <svg fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="activity-content">
                <div className="activity-text">Maintenance request for Room 205</div>
                <div className="activity-time">1 hour ago</div>
              </div>
            </div>

            <div className="activity-item">
              <div className="activity-icon" style={{ background: '#17a2b8' }}>
                <svg fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="activity-content">
                <div className="activity-text">Guest check-in for Presidential Suite</div>
                <div className="activity-time">2 hours ago</div>
              </div>
            </div>
          </ActivityFeed>

          <QuickActions>
            <h3>Quick Actions</h3>
            <div className="action-grid">
              <ActionButton>
                <svg fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
                </svg>
                Add New Room
              </ActionButton>

              <ActionButton>
                <svg fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                </svg>
                Manage Bookings
              </ActionButton>

              <ActionButton>
                <svg fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
                User Management
              </ActionButton>

              <ActionButton>
                <svg fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                </svg>
                View Reports
              </ActionButton>

              <ActionButton>
                <svg fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm0 4a1 1 0 011-1h12a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1V8z" clipRule="evenodd" />
                </svg>
                Room Management
              </ActionButton>

              <ActionButton>
                <svg fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
                Guest Services
              </ActionButton>
            </div>
          </QuickActions>

          <SystemStatus>
            <h3>System Status</h3>
            {systemStatusItems.map((item, index) => (
              <div key={index} className="status-item">
                <span className="status-label">{item.label}</span>
                <span className={`status-value ${item.class}`}>{item.value}</span>
              </div>
            ))}
          </SystemStatus>
        </Sidebar>
      </DashboardGrid>
    </DashboardContainer>
  );
}

export default Dashboard;
