"use client";
import { useQuery } from "react-query";
import { Container } from "@/app/component/Container";
import DataTable from "@/app/component/DataTable";

const fetchData = async () => {
  const response = await fetch(
    "https://api.eia.gov/v2/seriesid/ELEC.SALES.CO-RES.A?api_key=nIa7SZTCOf4VWCgh5fQUqXKNVdTZWzmzDDBVukfI"
  );

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  return response.json();
};

export default function Home() {
  const { data, error, isError, isLoading } = useQuery("fetchData", fetchData);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <Container>
          {isLoading && <div>Loading...</div>}
          {isError && (
            <div>
              Error:{" "}
              {error instanceof Error ? error.message : "An error occurred"}
            </div>
          )}
          {data && console.log(data.response.data)}

          {data && (
            <div>
              <DataTable data={data.response.data} />
            </div>
          )}
        </Container>
      </div>
    </main>
  );
}
