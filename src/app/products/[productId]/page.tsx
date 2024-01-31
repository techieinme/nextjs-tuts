export type parmsType  = {
  params : {
    productId: string;
  }
}

export default function ProductDetails({params}:parmsType){

  const {productId} = params;
  return (
    <>
     <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white"> {productId} product Details </h1>
    </>
  )
}