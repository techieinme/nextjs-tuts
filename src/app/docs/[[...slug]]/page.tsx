

export type docsProps  = {

  params : {
    slug:string[]
  }
}
export default function Docs({params}: docsProps){

  const {slug} = params;
  // docs/features1/concept1/
  const slugLength:number  = slug?.length;

  if(slugLength ==2){
    return (
      <>
      <h1>
        feature id {slug[0]} and concept id {slug[1]}
      </h1>
      </>
    )
  }else if(slugLength ==1){

    return (
      <>
      <h1>
        feature id {slug[0]} only
      </h1>
      </>
    )
  }
    return (
    <h1>
      default routing if you don't pass feature/concept  you will have to wrap [[...slug]]
    </h1>
    )
}