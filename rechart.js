change color based on value 

 <Bar dataKey="value" fill={(data) => (data.value > 20 ? 'green' : 'red')} />



 <Bar stackId="a" dataKey="premium" >
        {data.map((entry, index) => (
            <Cell fill={entry.years === "Current" ? '#290a0a' : '#005599' }/>
        ))}
    </Bar>
