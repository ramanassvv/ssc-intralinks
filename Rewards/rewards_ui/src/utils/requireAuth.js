import React from 'react';

export default function(ComposedComponent) {
    class Authenticate extends React.Component {
        componentWillMount(){
            console.log("hi");
            console.log(this.props.loginDispatchReducer.isAuthenticated)
            if(!this.props.isAuthenticated){
                this.props.history.push('/')
            }
        }

        componentWillUpdate(nextProps) {
            if (!nextProps.isAuthenticated) {
              this.props.history.push('/');
            }
          }

        render() {
            return (
              <ComposedComponent {...this.props} />
            );
          }
        }

    }