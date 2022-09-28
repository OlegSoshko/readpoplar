import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

export const useMenuNavigate = () => {
  const navigation = useNavigate();

  const navigateTo = useCallback( (route: string, isAnchor: boolean = false) => {
    navigation(isAnchor ? `#${route}` : route);
  }, [navigation]);

  return {
    navigateTo
  }
}