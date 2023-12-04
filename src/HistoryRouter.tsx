import * as React from "react";
import { BrowserHistory } from "history";
import { Router, Navigator } from "react-router-dom";
import { useDispatch } from "react-redux";
import { sendData } from "./redux/assistant";

type Props = {
    basename?: string;
    children: React.ReactNode;
    history: BrowserHistory;
}

/**
   * In react-router-dom you should use useNavigate to handle with History API. It's not very convenient, so you can use this Router component to use History API in your app.
   */
const HistoryRouter = ({ basename, children, history }: Props) => {
    const dispatch = useDispatch();
    const [state, setState] = React.useState({
        action: history.action,
        location: history.location,
    });

    React.useLayoutEffect(() =>
        history.listen(setState),

        [history])

    React.useLayoutEffect(() => {
        const unlisten = history.listen(() => {
            if (history.action === 'POP') {
                dispatch(
                    sendData({
                        action_id: 'Back',
                    })
                );
            }
        });

        return () => {
            unlisten(); // Cleanup the listener when component is unmounted
        };
    }, [history]);

    return (
        <Router
            basename={basename}
            location={state.location}
            navigator={history}
            navigationType={state.action}
        >
            {children}
        </Router>
    );
};

export default HistoryRouter;