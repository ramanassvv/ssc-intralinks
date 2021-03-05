import React from 'react';
import './SOM.css'

import swal from 'sweetalert';
import axios from 'axios';

class SOM extends React.Component{
    constructor(props){
        super(props);
        this.state={
         
            factors:[],
            to_id:'',
            feedbacks:[]
        }
        this.onChange=this.onChange.bind(this);
        this.getFactors=this.getFactors.bind(this);
        this.submitSOMFeedback=this.submitSOMFeedback.bind(this);
        this.factorInFeedbacks=this.factorInFeedbacks.bind(this);
        }
        
        
        componentDidMount(){
            this.getFactors();
         }

        onChange(e){

            if(['rating','reason'].includes(e.target.name)){
                
                let feedbacks=[...this.state.feedbacks]
                feedbacks[e.target.dataset.id][e.target.name]=e.target.value;
            }
            else {
                this.setState({ [e.target.name]: e.target.value })
            }
            // this.setState({
            //     feedbacks:this.state.feedbacks[e.target.name]=e.target.value
            // })
            // this.setState({
             
            //    [e]:e.target.value
              
            // })

            // console.log('%%%%%%%%%%%%%',e)
        }

        factorInFeedbacks(){
            
            for(let j=0;j<this.state.factors.length;j++){

                const obj={
                    factor_name:'',rating:'',reason:''
                }

                obj.factor_name=this.state.factors[j].factor_name;
                console.log(obj)

                this.setState(this.state.feedbacks[j]=obj)

              
                // this.setState(prevState => ({
                //     feedbacks: [...prevState.feedbacks, obj ]
                //   }))

                // this.setState({feedbacks:[...this.state.feedbacks,obj]})

                // this.setState({feedbacks:factor})
                
                // console.log(this.state.factors[j].factor_name)
                // this.state.feedbacks[j].factor_name=this.state.factors[j].factor_name
                // console.log(this.state.feedbacks[j])
            }

             console.log(this.state.feedbacks)
        }


        getFactors(){
            axios.get('/rewards/get-factors').then(res=>{
                console.log('Factors:')
                console.log(res.data)
                this.setState({factors:res.data})
                this.factorInFeedbacks();
              
            }).catch(err=>{
                console.log(err)
                console.log("Factors fetching failed")
            })
        }

        submitSOMFeedback(e){
            e.preventDefault();
            console.log('bum bum boleeeeee.....',this.state)
            
            for(let j=0;j<this.state.factors.length;j++){
            this.setState({feedbacks:this.state.feedbacks[j].to_id=this.state.to_id,})
            this.setState({feedbacks:this.state.feedbacks[j].from_id=this.props.loginDispatchReducer.user.emp_id})
            this.setState({feedbacks:this.state.feedbacks[j].award_type='som'})
            }
            console.log('bum bum',this.state.feedbacks)
            
            axios.post('/rewards/submit-feedbacks',{feedbacks:this.state.feedbacks}).then(res=>{
 
                // console.log(res.data)
                console.log("feedback Sent!!")
                
                swal("Thank You!", "Your Feedback has been received!", "success")
                this.setState({
                    feedbacks:[{}],
                    to_id:''
                })
                // console.log(this.state.feedbacks);
                //     for(let k=0;k<this.state.factors.length;k++){
                //     this.state.reasonInput[k].value='';
                //     this.state.ratingInput[k].value='';
                // }
                }).catch(err=>{
                console.log(err)
                console.log("Feedback submission failed!!")
                })
           
    }


        render(){
            // let arr=[]
            // for(let j=0;j<=this.state.count;j+=1){
            //     arr.push(j)
                
            // }
        //     let obj={
        //         factor:'',
        //         rating:'',
        //         reason:''

        //     }
        //   for(let j=0;j<this.state.factors.length;j++){
        //  this.state.feedbacks[j]=obj;
        //   }

        //    console.log(this.state.feedbacks)
        

            return(
                <div className="container-fluid">
                    <form onSubmit={this.submitSOMFeedback} >
                        <div className="form-group">
                        <label >Employee ID:</label>
                        <input type="text" className="form-control" name="to_id" onChange={this.onChange} placeholder="Enter employee id"  required  />
                        </div>
                        {this.state.factors.map((value,i)=>{
                            //     console.log('!!!!!!!!!!!!!!',value,i);
                            var factor_name = `${i}-factor_name`;
                            var rating = `${i}-rating`;
                            var reason = `${i}-reason`;
                            return  <div key={i}>
                            <div className="row" >
                                <div className="col-md-6 col-sm-6">
                                    <div className="form-group">
                                        <label>Factor:</label>
                                        <input type="text" className="form-control"  onChange={this.onChange} data-id={i} name="factor_name" id={factor_name}  value={value.factor_name}  readOnly="readonly"/>
                                    </div>
                                </div>
                            
                                <div className="col-md-6 col-sm-6">
                                    <div className="form-group">
                                        <label>Rating:</label> 
                                        <select  className="form-control"  required data-id={i} name="rating" id={rating}  onChange={this.onChange}>
                                        
                                         {/* onChange={(e)=>{
                                            console.log('##########',ratingKey,e.target.value,this.state.feedbacks);
                                                    
                                             let joined = this.state.feedbacks.concat(e.target.value);
                                                 this.setState({feedbacks:this.state.feedbacks.concat({[ratingKey]:e.target.value})})                                            
                                                 }} > */}
                                            <option disabled selected hidden value="">Select Rating</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                       
                        <div className="form-group">
                        <label>Reason:</label>
                        <textarea type="text" className="form-control" name="reason" required data-id={i} id={reason} onChange={this.onChange}/>
                        
                        {/* onChange={(e) => {
                            console.log('######',reasonKey,e.target.value,this.state.feedbacks);

                            this.setState({feedbacks:this.state.feedbacks.concat({[reasonKey]:e.target.value})})
                        }} /> */}
                        </div>
                        </div>
                    } )}
                        <button type="submit" className="btn btn-success">Submit</button>
                    </form>

                       
                </div>
            )
    }
}


export default SOM;