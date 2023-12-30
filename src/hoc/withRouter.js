import React from "react";
import {useLocation, useNavigate, useParams} from "react-router-dom";

function withRouter(Component) {

    function ProfileContainerWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{location, navigate, params}}
            />
        );
    }

    return ProfileContainerWithRouterProp;
}

export default withRouter;