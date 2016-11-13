import React, {Component, PropTypes} from 'react';
import { Link } from 'react-router';


const propTypes = {
    currentMenu: React.PropTypes.string,
	onUpdate: React.PropTypes.func
};

const defaultProps = {
    currentMenu: "Menu Name",
	onUpdate: (menuname) => { console.error("onUpdate not defined"); }
};

class Header extends React.Component {

    constructor(props) {
        super(props);

		this.handleHome = this.handleHome.bind(this);
    }

	componentDidMount() {
		// when we are on a Desktop Screen and the collapse is triggered we check if the sidebar mini is active or not. If it is active then we don't let the collapse to show the elements because the elements from the collapse are showing on the hover state over the icons in sidebar mini, not on the click.
        $('.sidebar .collapse').on('show.bs.collapse',function(){
            if($(window).width() > 991){
                if(pdp.misc.sidebar_mini_active == true){
                    return false;
                } else{
                    return true;
                }
            }
        });

        $('#minimizeSidebar').click(function(){
            var $btn = $(this);

            if(pdp.misc.sidebar_mini_active == true){
                $('body').removeClass('sidebar-mini');
                $btn.html('<i class="ti-more-alt"></i>');
                pdp.misc.sidebar_mini_active = false;

                if(isWindows){
                    $('.sidebar .sidebar-wrapper').perfectScrollbar();
                }

            }else{

                $('.sidebar .collapse').collapse('hide').on('hidden.bs.collapse',function(){
                    $(this).css('height','auto');
                });

                if(isWindows){
                    $('.sidebar .sidebar-wrapper').perfectScrollbar('destroy');
                }

                setTimeout(function(){
                    $('body').addClass('sidebar-mini');
                    $btn.html('<i class="ti-menu-alt"></i>');

                    $('.sidebar .collapse').css('height','auto');
                    pdp.misc.sidebar_mini_active = true;
                },300);
            }

            // we simulate the window Resize so the charts will get updated in realtime.
            var simulateWindowResize = setInterval(function(){
                window.dispatchEvent(new Event('resize'));
            },180);

            // we stop the simulation of Window Resize after the animations are completed
            setTimeout(function(){
                clearInterval(simulateWindowResize);
            },1000);
        });

	}

	handleHome() {
		this.props.onUpdate('Home');
	}

    render() {


        return (
			<nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-minimize">
                        <button id="minimizeSidebar" className="btn btn-fill btn-icon">
                            <i className="ti-more-alt"></i>
                        </button>
                    </div>
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar bar1"></span>
                            <span className="icon-bar bar2"></span>
                            <span className="icon-bar bar3"></span>
                        </button>
                        <Link to={this.props.currentMenu} className="navbar-brand">{this.props.currentMenu}</Link>
                    </div>

                </div>
            </nav>
        );
    }
}

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default Header;
