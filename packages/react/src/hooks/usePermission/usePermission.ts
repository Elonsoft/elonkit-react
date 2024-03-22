import { useEffect, useState } from 'react';

type IState = PermissionState | '';

interface IPushPermissionDescriptor extends PermissionDescriptor {
  name: 'push';
  userVisibleOnly?: boolean;
}

interface IMidiPermissionDescriptor {
  name: 'midi';
  sysex?: boolean;
}

interface IDevicePermissionDescriptor {
  name: 'camera' | 'microphone' | 'speaker';
  deviceId?: string;
}

export type IPermissionDescriptor =
  | PermissionDescriptor
  | IPushPermissionDescriptor
  | IMidiPermissionDescriptor
  | IDevicePermissionDescriptor;

/**
 * The hook that queries permission status of browser APIs.
 * @param permissionDesc The PermissionDescriptor object.
 * @returns The PermissionStatus.
 */
export const usePermission = (permissionDesc: IPermissionDescriptor): IState => {
  const [state, setState] = useState<IState>('');

  useEffect(() => {
    let mounted = true;
    let permissionStatus: PermissionStatus | null = null;

    const onChange = () => {
      if (!mounted) {
        return;
      }
      setState(() => permissionStatus?.state ?? '');
    };

    navigator.permissions.query(permissionDesc as any).then((status) => {
      permissionStatus = status;
      permissionStatus.addEventListener('change', onChange);
      onChange();
    });

    return () => {
      if (permissionStatus) {
        permissionStatus.removeEventListener('change', onChange);
      }
      mounted = false;
      permissionStatus = null;
    };
  }, [permissionDesc]);

  return state;
};
