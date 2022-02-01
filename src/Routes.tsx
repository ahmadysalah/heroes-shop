import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Routes, Route, Navigate } from "react-router";
import routes from "./Helpers/Router";
import { showToast } from "./Helpers/tools";
import { RootState, useAppDispatch } from "./Store/configureStore";
import { clearSuccessErrorNotification } from "./Store/Slices/notifications";

const AllRoutes = () => {
  const dispatch = useAppDispatch();
  const notifications = useSelector(
    (state: RootState) => state.entities.notifications
  );
  const [rule, setRule] = useState("");
  const [ready, setReady] = useState(false);

  let data = useSelector((state: RootState) => state.entities.user);

  useEffect(() => {
    const _rule = localStorage.getItem("rule");
    _rule && setRule(_rule as string);
    _rule && setReady(true);
  }, [ready, data.auth, data.data?.isAdmin]);

  useEffect(() => {
    if (ready) {
      if (data.auth && data.data?.isAdmin) {
        localStorage.setItem("rule", "admin");
        setRule("admin");
      }
      if (data.auth && !data.data?.isAdmin) {
        localStorage.setItem("rule", "customer");
        setRule("customer");
      }
    }
  }, [data, ready, rule]);

  useEffect(() => {
    if (notifications && notifications.error === true) {
      const msg = notifications.msg ? notifications.msg : "Error";
      showToast("ERROR", msg);
      dispatch(clearSuccessErrorNotification());
    }

    if (notifications && notifications.success === true) {
      const msg = notifications.msg ? notifications.msg : "Done!!!!";
      showToast("SUCCESS", msg);
      dispatch(clearSuccessErrorNotification());
    }
  }, [dispatch, notifications]);

  return (
    <>
      {ready && (
        <Routes>
          {routes.map((route) =>
            route?.ruleShouldBe?.includes(rule) ? (
              <Route
                path={route.route}
                element={route.component}
                key={route.name}
              />
            ) : (
              <Route
                path={route.route}
                element={<Navigate to={route.to} />}
                key={route.name}
              />
            )
          )}
        </Routes>
      )}
    </>
  );
};

export default AllRoutes;
