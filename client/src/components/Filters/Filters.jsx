import React from "react";
import { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";

export default function Filters(){



    return(
        <div>
        
        
        
        <h4 className={styles.h4}>Order</h4>
        <select className={styles.select}>
            <option>-</option>
            <option className={styles.order}>Strength</option>
            <option value="asc" onClick={e => {handleFilterStr(e)}}>ASC</option>
            <option value="desc"  onClick={e => {handleFilterStr(e)}}>DESC</option>
            <option className={styles.order}>Alphabetically</option>
            <option value="asc" onClick={e => {handleOrderName(e)}}>A - Z</option>
            <option value="desc" onClick={e => {handleOrderName(e)}}>Z - A</option>
        </select>
      </div>
        
        
    )  
}
