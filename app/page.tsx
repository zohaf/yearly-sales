'use client';
import { useQuery } from 'react-query';
import { Container } from '@/app/component/Container'

const fetchData = async () => {
  const response = await fetch('https://api.eia.gov/v2/seriesid/ELEC.SALES.CO-RES.A?api_key=nIa7SZTCOf4VWCgh5fQUqXKNVdTZWzmzDDBVukfI');
  
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  
  return response.json();
};

export default function Home() {
  const { data, error, isError, isLoading } = useQuery('fetchData', fetchData);
  console.log('data', data.response.data)

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <Container>
        {isLoading && <div>Loading...</div>}
        {isError && <div>Error: {error instanceof Error ? error.message : 'An error occurred'}</div>}

          {data && (
            <div>
              {/* Display your table or data here using the 'data' variable */}
            </div>
          )}
        </Container>
      </div>
    </main>
  )
}
