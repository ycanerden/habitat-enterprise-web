import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const size = { width: 32, height: 32 };
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 20,
          background: 'white',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#0F172A',
          fontWeight: 'bold',
          borderRadius: '6px',
          border: '2px solid #4F46E5',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <span style={{ color: '#64748B', opacity: 0.5 }}>[</span>
          <span style={{ color: '#4F46E5', padding: '0 1px' }}>H</span>
          <span style={{ color: '#64748B', opacity: 0.5 }}>]</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
