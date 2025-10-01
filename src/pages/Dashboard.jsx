import React, { useState } from 'react';
import styled from 'styled-components';
import { useAuth } from '../context/AuthContext';
import Button from '../components/Button';
import ProtectedRoute from '../components/ProtectedRoute';

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

  // Mock data for demonstration
  const stats = {
    totalBookings: 1247,
    revenue: 284750,
    occupancy: 87,
    guests: 892
  };

  const recentBookings = [
    {
      id: 1,
      guest: 'John Smith',
      room: 'Deluxe Suite',
      checkIn: '2024-01-15',
      checkOut: '2024-01-17',
      status: 'confirmed'
    },
    {
      id: 2,
      guest: 'Sarah Johnson',
      room: 'Executive Room',
      checkIn: '2024-01-16',
      checkOut: '2024-01-18',
      status: 'pending'
    },
    {
      id: 3,
      guest: 'Mike Wilson',
      room: 'Standard Room',
      checkIn: '2024-01-14',
      checkOut: '2024-01-15',
      status: 'confirmed'
    }
  ];

  if (!user || user.role !== 'admin') {
    return <ProtectedRoute requireAuth={true} />;
  }

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
          <div className="stat-number">{stats.totalBookings.toLocaleString()}</div>
          <div className="stat-label">Total Bookings</div>
          <div className="stat-description">+12% from last month</div>
        </StatCard>

        <StatCard color="#007bff">
          <div className="stat-number">${stats.revenue.toLocaleString()}</div>
          <div className="stat-label">Revenue</div>
          <div className="stat-description">+8% from last month</div>
        </StatCard>

        <StatCard color="#ffc107">
          <div className="stat-number">{stats.occupancy}%</div>
          <div className="stat-label">Occupancy Rate</div>
          <div className="stat-description">+3% from last month</div>
        </StatCard>

        <StatCard color="#e74c3c">
          <div className="stat-number">{stats.guests.toLocaleString()}</div>
          <div className="stat-label">Total Guests</div>
          <div className="stat-description">+15% from last month</div>
        </StatCard>
      </StatsGrid>

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
              {recentBookings.map(booking => (
                <div key={booking.id} className="booking-item">
                  <div className="booking-info">
                    <div className="guest-name">{booking.guest}</div>
                    <div className="booking-details">
                      {booking.room} • {booking.checkIn} to {booking.checkOut}
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
                <div style={{ fontSize: '2rem', fontWeight: '700', color: '#28a745' }}>45</div>
                <div style={{ color: '#666' }}>Available</div>
              </div>
              <div style={{ textAlign: 'center', padding: 'var(--space-lg)', background: '#f8f9fa', borderRadius: '12px' }}>
                <div style={{ fontSize: '2rem', fontWeight: '700', color: '#e74c3c' }}>8</div>
                <div style={{ color: '#666' }}>Occupied</div>
              </div>
              <div style={{ textAlign: 'center', padding: 'var(--space-lg)', background: '#f8f9fa', borderRadius: '12px' }}>
                <div style={{ fontSize: '2rem', fontWeight: '700', color: '#ffc107' }}>3</div>
                <div style={{ color: '#666' }}>Maintenance</div>
              </div>
              <div style={{ textAlign: 'center', padding: 'var(--space-lg)', background: '#f8f9fa', borderRadius: '12px' }}>
                <div style={{ fontSize: '2rem', fontWeight: '700', color: '#007bff' }}>2</div>
                <div style={{ color: '#666' }}>Reserved</div>
              </div>
            </div>
          </SectionCard>
        </MainContent>

        <Sidebar>
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
            </div>
          </QuickActions>

          <SystemStatus>
            <h3>System Status</h3>
            <div className="status-item">
              <span className="status-label">Booking System</span>
              <span className="status-value online">Online</span>
            </div>
            <div className="status-item">
              <span className="status-label">Payment Gateway</span>
              <span className="status-value online">Online</span>
            </div>
            <div className="status-item">
              <span className="status-label">Email Service</span>
              <span className="status-value warning">Degraded</span>
            </div>
            <div className="status-item">
              <span className="status-label">Database</span>
              <span className="status-value online">Online</span>
            </div>
          </SystemStatus>
        </Sidebar>
      </DashboardGrid>
    </DashboardContainer>
  );
}

export default Dashboard;
