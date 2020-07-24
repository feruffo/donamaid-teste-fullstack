/* eslint-disable */
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { durationRequest } from '~/store/modules/schedule/actions';
import { Container, DurationButton } from './styles';

export default function Duration() {
  const dispatch = useDispatch();
  const hour = useSelector(state => state.schedule.hour);
  const [durations, setDurations] = useState([]);

  useEffect(() => {
    const defaultDurations = [1, 2, 3, 4, 5, 6, 7, 8];
    async function loadDurations() {
      setDurations(
        defaultDurations.map(durationValue => {
          return {
            duration: durationValue,
            isAvailable: hour + durationValue <= 19,
          };
        })
      );
    }
    loadDurations();
  }, []);

  function handleDuration(duration) {
    dispatch(durationRequest(duration));
  }

  return (
    <Container>
      <h1>Duração disponível</h1>
      <ul>
        {durations.map(duration => (
          <DurationButton
            onClick={() => handleDuration(duration.duration)}
            disabled={!duration.isAvailable}
            available={duration.isAvailable}
            key={duration.duration}
          >
            <strong>{`${duration.duration} hora(s)`}</strong>
          </DurationButton>
        ))}
      </ul>
    </Container>
  );
}
