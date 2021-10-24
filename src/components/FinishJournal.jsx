import { withRouter } from "react-router-dom";
import "./Journal.css";
import CircularSlider from "@nkalupahana/react-circular-slider";
import { IonSegment, IonSegmentButton, IonLabel, IonTextarea } from "@ionic/react";

const FinishJournal = withRouter((props) => {
    // TODO: jerky, not sure what to do about this
    const initVal = Number(props.mood);

    return (
        <div className="center-main">
            <div className="title">
                Let's summarize.
            </div>
            <p className="text-center">On a scale from -5 to 5, how are you?</p>
            <br />
            <CircularSlider
                width={230}
                label="nice find!"
                labelFontSize={0}
                valueFontSize="5rem"
                labelColor="#005a58"
                knobColor="#005a58"
                progressColorFrom="#c8e6c9"
                progressColorTo="#388e3c"
                progressSize={24}
                trackColor="#eeeeee"
                trackSize={24}
                min={-5}
                max={5}
                direction={-1}
                dataIndex={initVal + 5}
                animateKnob={false}
                verticalOffset="0.2em"
                onChange={ v => props.setMood(v) }
            />

            <br /><br />

            <p className="text-center">And finally, would you say that you're feeling:</p>
            <div className="container">
                <IonSegment mode="ios" value={props.average} onIonChange={e => props.setAverage(e.detail.value)}>
                    <IonSegmentButton value="below">
                        <IonLabel>Below Average</IonLabel>
                    </IonSegmentButton>
                    <IonSegmentButton value="average">
                        <IonLabel>Average</IonLabel>
                    </IonSegmentButton>
                    <IonSegmentButton value="above">
                        <IonLabel>Above Average</IonLabel>
                    </IonSegmentButton>
                </IonSegment>
            </div>
            <br /><br /><br /><br /><br /><br /><br /><br /><br />
            <div className="bottom-bar">
                <IonTextarea readonly rows={2} className="tx tx-display" value={props.text} placeholder="No mood log -- tap to add" onIonFocus={() => props.history.goBack()} />
                <div className="finish-button">Done!</div>
            </div>
        </div>
    );
});

export default FinishJournal;