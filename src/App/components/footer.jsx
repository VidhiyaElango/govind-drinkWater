import React, { Component } from 'react';
class Footer extends Component{
    render(){
        return(
            <div className="footer">
                <footer className="container">
                    <p className="float-right"><a href="/#">Back to top</a></p>
                    <p>&copy; 2017-2018 Company, Inc. &middot; <a href="#">Privacy</a> &middot; <a href="#">Terms</a></p>
                </footer>
            </div>
        
          );
    }
}
export default Footer;