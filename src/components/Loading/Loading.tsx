import { LoadingContainer, Spinner, LoadingText } from './LoadingStyled';

export default function Loading() {
  return (
    <LoadingContainer>
      <Spinner />
      <LoadingText>Loading amazing content...</LoadingText>
    </LoadingContainer>
  );
}
