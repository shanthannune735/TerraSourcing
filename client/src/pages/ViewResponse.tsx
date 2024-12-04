import { useNavigate } from "react-router-dom";

export default function ViewResponse(){
  const navigate = useNavigate()
  return(
    <section className="py-8 max-w-[1080px] mx-auto">
      <header className="flex flex-row items-center justify-center py-8">
        <p className="text-xl lg:text-2xl font-semibold">View Response</p>
      </header>
      <div className="mx-auto py-8 shadow-md rounded-xl px-4 flex flex-col gap-8">
        <button className="bg-primary px-4 py-2 text-white w-fit rounded" onClick={() => navigate(-1)}>Back</button>
        <div className="">
          <h1 className="font-bold text-2xl">Anduronda Import GmbH</h1>
          <p className="text-gray-500">Germany</p>
        </div>
        <div>
          <h2 className="font-bold">Address:</h2>
          <p className="text-gray-500" >Chemnitzer Strae 14-163O952 Ronnenberg</p>
        </div>
        <div>
          <h2 className="font-bold">Website:</h2>
          <p className="text-gray-500" >http://www.ako-spice.com</p>
        </div>
        <div>
          <h2 className="font-bold">Email:</h2>
          <p className="text-gray-500" >team@ako-spice.com</p>
        </div>
        <div>
          <h2 className="font-bold">License:</h2>
          <p className="text-gray-500" >Currently registered</p>
        </div>
      </div>
    </section>
  )
}
