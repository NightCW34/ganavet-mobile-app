import { useCallback, useState } from "react";
import { useOAuth } from "@clerk/clerk-expo";
import { Redirect } from "expo-router";

export const useOAuthSignIn = (
  strategy: "oauth_google" | "oauth_facebook" | "oauth_github"
) => {
  const [loading, setLoading] = useState(false);
  const { startOAuthFlow } = useOAuth({ strategy });

  const onPress = useCallback(async () => {
    setLoading(true);

    try {
      const { createdSessionId } = await startOAuthFlow();

      if (createdSessionId) {
        return <Redirect href="/home" />;
      } else {
        alert("El inicio de sesión no fue exitoso");
      }
    } catch (err) {
      console.error("OAuth error", err);
      alert("Error al iniciar sesión");
    } finally {
      setLoading(false);
    }
  }, []);

  return { onPress, loading };
};
