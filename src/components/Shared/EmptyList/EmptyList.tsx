import { Paper, CircularProgress, Typography } from "@mui/material";
import React from "react";

const EmptyList = ({
  list,
  isLoading,
  noData = "No Data",
}: {
  list: any[];
  isLoading: boolean;
  noData?: string;
}) => {
  return (
    <>
      {(list?.length <= 0 || isLoading) && (
        <Paper
          elevation={0}
          className="w-full text-center p-4 h-24 flex items-center justify-center"
        >
          {isLoading ? (
            <CircularProgress color="inherit" size={32} />
          ) : (
            <>{list?.length <= 0 && <Typography>{noData}</Typography>}</>
          )}
        </Paper>
      )}
    </>
  );
};

export default EmptyList;
