import React from "react";



const CompanyExperience = (props) => {
const {name,role,task,techStack} = props.item;
return (
    <div>
        <h2>{name}</h2>
    </div>
)


}

export default CompanyExperience;