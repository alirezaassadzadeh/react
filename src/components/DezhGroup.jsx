import { Button, Typography, styled } from "@mui/material";


const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: "red",
}));

function DezhGroup() {
  return (
    <>
      <div className="header-wraper w-full">
        
        <div className="dezh-header">
          
           
          <Typography
            variant="h1"
            className="dezh-header-title"
            sx={{
              fontSize: "8vmin",
              textOverflow: "ellipsis",
              fontFamily: "nastaliq",
              fontWeight: "900",
              color:"gold",
            }}
            >
           گروه نرم افزاری سافت اسپید
          </Typography>
           

       </div>
      </div>
    </>
  );
}

export default DezhGroup;
