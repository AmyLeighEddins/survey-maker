import { Survey } from "../../hooks/api/types";
import useSurveys from "../../hooks/api/useSurveys";
import Sidebar from "../../components/shared/Sidebar";

const Surveys = () => {
  const { isPending, error, data, isFetching } = useSurveys();

  if (isPending || isFetching) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      <Sidebar />
      <div>
        {data?.map((survey: Survey) => (
          <div key={survey.id}>
            <h1>{survey.id}</h1>
            <p>{survey.summary}</p>
          </div>
        ))}
      </div>
    </>
  )
}

export default Surveys;