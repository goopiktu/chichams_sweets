import './date_help.css';
import FadeIn from 'react-fade-in';

function DateHelp() {
        return(
                <div className="date-help-div">
                        <FadeIn transitionDuration={500}>
                                Orders must be at least 7 days before the date
                        </FadeIn>
                </div>
        );
}

export default DateHelp
