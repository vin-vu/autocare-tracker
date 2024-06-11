import CarForm from './ui/CarForm';
import CarActionsContainer from './ui/CarActionsContainer';

export default function Home() {
  return (
    <>
      <CarActionsContainer />
      <div className="flex justify-center items-center">
        {/* <TriggerButton name={"Add Car"} /> */}
      </div>
      <CarForm />
    </>
  );
}
