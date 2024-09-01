import React from 'react';
class Mode extends React.Component{
    constructor(props)
    {
        super(props);
        this.state={mode:'Kaioken',
             count:0
        }
    }
    Click=()=>
    {
        this.setState((pre)=>
        {
            const clickcount=pre.count+1;
            if(clickcount>=4)
            {
                return{
                    mode:pre.mode==='Kaioken'?'SuperSaiyan':'Kaioken',
                    count:0
                };
            }
            return {count:clickcount}
        });
    }
    render()
    {
        return(
            <div>
            <button onClick={this.Click}>{this.state.mode}</button>
            </div>
        )
    }
}
export default Mode;
