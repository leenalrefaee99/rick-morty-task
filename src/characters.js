import React,{useEffect} from 'react';
import { useQuery, gql } from "@apollo/client";

let characters_query = gql`
    query {
        characters {
            info {
            count
            }
            results {
            name
            gender
            image
            species
            }
        }
    }
`;


const Characters = () =>{
    const { data, loading, error } = useQuery(characters_query);

    if (loading) {
      return <div>loading</div>;
    }
  
    if (error) {
      return <div>{error}</div>;
    }

    console.log(data);

    return (
        <div className="container p-5">
            <img className="w-50" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Rick_and_Morty.svg/2560px-Rick_and_Morty.svg.png"></img>
            <h1 className="mb-4">characters</h1>
            <div className="row">
                {
                    data.characters.results.map((item,index) => (
                        <div className="col-4 mb-3">
                              <div className="card">
                            <div className="card-body">
                            <h5 className="card-title">{item.name}</h5>
                            <p className="card-text">Gender: {item.gender}, Species: {item.species}</p>
                            <a target="_blank" href={item.image} className="btn btn-dark">Open Image</a>
                            </div>
                        </div>
                        </div>
                      
                    ))
                }
            </div>
        </div>
    )

}
export default Characters;