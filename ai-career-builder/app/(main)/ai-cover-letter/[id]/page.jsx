

const CoverLetter = async ({params}) => {

  const id = await params.id;
  return <div>
      CoverLetter Page:{id}
    </div>;
  
}

export default CoverLetter
