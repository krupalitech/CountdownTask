import { useState, useEffect, useRef, useCallback } from "react";
import * as yup from "yup";
import { Container, Box, Typography, Stack, Paper } from "@mui/material";
import { PlayArrow, Pause, PlaylistAddCheck, Replay } from "@mui/icons-material";
import CommonTextField from "../components/CommonTextField";
import CommonButton from "../components/CommonButton";

// Constants
const MAX_SECONDS = 3599;
const TIMER_INTERVAL = 1000;

// Yup validation schema
const countdownSchema = yup.object().shape({
  time: yup
    .number("Time must be a number")
    .typeError("Time must be a number")
    .required("Time is required")
    .positive("Time must be greater than 0")
    .integer("Time must be a whole number")
    .max(MAX_SECONDS, `Maximum time is 59:59 (${MAX_SECONDS} seconds)`),
});

function CountdownTimer() {
  const [inputTime, setInputTime] = useState("");
  const [remainingTime, setRemainingTime] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [error, setError] = useState("");
  const intervalRef = useRef(null);

  // Helper to clear interval
  const clearTimerInterval = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  // Cleanup interval on unmount
  useEffect(() => clearTimerInterval, [clearTimerInterval]);

  // Timer logic
  useEffect(() => {
    if (!isActive || isPaused) {
      clearTimerInterval();
      return;
    }

    intervalRef.current = setInterval(() => {
      setRemainingTime(prev => {
        if (prev <= 1) {
          setIsActive(false);
          return 0;
        }
        return prev - 1;
      });
    }, TIMER_INTERVAL);

    return clearTimerInterval;
  }, [isActive, isPaused, clearTimerInterval]);

  // Format time MM:SS
  const formatTime = useCallback(seconds => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  }, []);

  // Start timer
  const handleStart = useCallback(async () => {
    try {
      setError("");
      const validated = await countdownSchema.validate({
        time: inputTime ? parseInt(inputTime, 10) : undefined,
      });
      setRemainingTime(validated.time);
      setIsActive(true);
      setIsPaused(false);
    } catch (err) {
      setError(err.message);
    }
  }, [inputTime]);

  const handlePause = useCallback(() => setIsPaused(true), []);
  const handleResume = useCallback(() => setIsPaused(false), []);
  const handleReset = useCallback(() => {
    setIsActive(false);
    setIsPaused(false);
    setRemainingTime(0);
    setInputTime("");
    setError("");
    clearTimerInterval();
  }, [clearTimerInterval]);

  const handleInputChange = useCallback(e => {
    const value = e.target.value;
    if (value === "" || /^\d+$/.test(value)) {
      setInputTime(value);
      if (value) setError("");
    }
  }, []);

  const subtitleStyle = { mb: 1.5, opacity: 0.9, fontWeight: 600, letterSpacing: 0.5, textAlign: "center" };
  const timerStyle = { fontFamily: "'Courier New', monospace", fontWeight: 700, textShadow: "2px 2px 4px rgba(0,0,0,0.3)", letterSpacing: "0.1em" };

  return (
    <Container maxWidth="sm" sx={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", py: 4 }}>
      <Paper elevation={8} sx={{ width: "100%", background: "rgba(0,0,0,0.5)", borderRadius: 3, p: 4, color: "white" }}>
        <Box display="grid" gap={3}>
          {/* Title */}
          <Typography variant="h3" component="h1" sx={{ fontWeight: 700, textShadow: "2px 2px 4px rgba(0,0,0,0.3)", textAlign: "center" }}>
            Countdown Timer
          </Typography>

          {/* Input */}
          <Box display="flex" justifyContent="center">
            <Box sx={{ width: "100%", maxWidth: 300 }}>
              <CommonTextField
                label="Enter time (seconds)"
                type="number"
                value={inputTime}
                onChange={handleInputChange}
                disabled={isActive}
                inputProps={{ min: 0 }}
              />
              {error && <Typography variant="caption" sx={{ display: "block", mt: 1, color: "#ff6b6b", fontWeight: 600, textAlign: "center" }}>{error}</Typography>}
            </Box>
          </Box>

          {/* Display */}
          <Box>
            <Typography variant="subtitle2" sx={subtitleStyle}>Remaining Time</Typography>
            <Box sx={{ textAlign: "center", background: "rgba(0,0,0,0.2)", p: 3, borderRadius: 2 }}>
              <Typography variant="h2" sx={timerStyle}>{formatTime(remainingTime)}</Typography>
            </Box>
          </Box>

          {/* Controls */}
          <Box>
            <Typography variant="subtitle2" sx={{ ...subtitleStyle, mb: 2 }}>Timer Controls</Typography>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={2} justifyContent="center" flexWrap="wrap" gap={2}>
              <CommonButton buttonType="start" startIcon={<PlayArrow />} onClick={handleStart} disabled={isActive}>Start</CommonButton>
              <CommonButton buttonType="pause" startIcon={<Pause />} onClick={handlePause} disabled={!isActive || isPaused}>Pause</CommonButton>
              <CommonButton buttonType="resume" startIcon={<PlaylistAddCheck />} onClick={handleResume} disabled={!isPaused}>Resume</CommonButton>
              <CommonButton buttonType="reset" startIcon={<Replay />} onClick={handleReset}>Reset</CommonButton>
            </Stack>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
}

export default CountdownTimer;
