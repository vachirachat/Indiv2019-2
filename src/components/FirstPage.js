import React,{Component} from 'react';
import FirstCompPage from './FirstCompPage';
import SecondCompPage from './SecondCompPage';
import Footer from './Footer';
import ChartEx from './ChartEx';
import {Element} from 'react-scroll';
import ScrollNavigation from 'react-single-page-navigation';

export class FirstPage extends Component {
    render(){
        return (
        <div>
            
            <FirstCompPage/>
            <Element className="ChartEx">
                <ChartEx />
            </Element>
            <SecondCompPage/>
            
            <Footer />
        </div>
        )
    }
}
export default FirstPage;