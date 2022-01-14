import LikeButton from "../LikeButton/LikeButton";
// Like Button is added as a coding example

const DisplayEntries = (props) => {
    return ( 
        <table className='table'>
        <thead>
          <tr>
            <th>Entry Number</th>
            <th>Weight</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
            {props.parentEntries.map((entry, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{entry.weight}</td>
                  <td>{entry.date}</td>
                  <td><LikeButton/></td>
                  </tr>
              );
            })}
        </tbody>
      </table> 
     );
}
 
export default DisplayEntries;