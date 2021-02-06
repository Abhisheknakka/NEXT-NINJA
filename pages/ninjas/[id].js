export const getStaticPaths =async()=>{
    const res=await fetch('https://jsonplaceholder.typicode.com/users');
    const data=res.json();

    const paths=data.map(ninjas=>{
        return {
            params:{id: ninja.id.toString()}
        }
    })
   
    
    return{
        paths,
        fallback:false
    }
}
export const getStaticProps=async()=>{
     const id=context.params.id;
     const response=fetch();
     const res=fetch('https://jsonplaceholder.typicode.com/users/'+id);
     const data=await res.json();
     return{
         props: {ninja:data}
     }
}

const Details = ({ninja }) => {
    return (  
        <div>
            <h1>
                {ninjas.name}
            </h1>
            <p>{ninjas.email}</p>
            <p>{ninjas.website}</p>
            <p>{ninjas.address.city}</p>
            
        </div>
    );
}
 
export default Details;