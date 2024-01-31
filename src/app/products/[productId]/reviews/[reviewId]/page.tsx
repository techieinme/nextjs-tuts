import { notFound } from "next/navigation";

export type parmsType  = {
  params : {
    reviewId: string;
  }
}

export default function ReviewDetails({params}:parmsType){

  const {reviewId} = params;

  if(parseInt(reviewId)>1000){
    notFound();
  }

  return (
    <>
     <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white"> 
     
     {reviewId} reviewId Details </h1>
    </>
  )
}