let passiveSupported = false;

export function makePassiveEventOption(): any {
  try {
    const options = {
      get passive() {
        passiveSupported = true;
        return false;
      }
    };

    return options;
  } catch (err) {
    passiveSupported = false;
    return passiveSupported;
  }
}
