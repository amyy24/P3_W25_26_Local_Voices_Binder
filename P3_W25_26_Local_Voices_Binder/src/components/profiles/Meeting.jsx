import { Box, Typography, IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function MeetingInfoRow({ icon, title, subtitle, buttonRight }) {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: buttonRight ? "space-between" : "flex-start",
        alignItems: "center",
        mb: 1,
      }}
    >
      {/* Linker Teil: Icon + Text */}
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        {icon}
        <Box>
          <Typography variant="subtitle1" fontWeight={600}>
            {title}
          </Typography>
          {subtitle && (
            <Typography variant="body2" color="text.secondary">
              {subtitle}
            </Typography>
          )}
        </Box>
      </Box>

      {/* Rechter Button */}
      {buttonRight && (
        <IconButton
          onClick={() => navigate(buttonRight.link)} // Navigation beim Klick
          size="small"
        >
          {buttonRight.icon}
        </IconButton>
      )}
    </Box>
  );
}
