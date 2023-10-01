// Codes By Mahdi Tasha
// Forcing NextJS To Render This Component As Client Side Component
'use client';

// Importing Part
import {ReactNode, useState} from "react";
import IconComponent from '@/chunk/iconComponent';

// Defining Types Of Props
interface propsType {
    children: ReactNode;
}

// Creating And Exporting Upload File Component As Default
export default function UploadFileComponent({children}:propsType):ReactNode {
    // Defining States Of Component
    const [fileHandle, setFileHandle] = useState('');

    // Returning JSX
    return (
        <button type={'button'} className={'p-[10px] border border-white bg-black flex items-center justify-between gap-[10px]'} onClick={() => {
            if (fileHandle === '') {
                // @ts-ignore
                window.showOpenFilePicker({
                    types: [
                        {
                            description: "Images",
                            accept: {"image/*": [".png", ".jpeg", ".jpg"],},
                        },
                    ],
                    excludeAcceptAllOption: true,
                    multiple: false,
                })
                    .then((data: [{ name: string, kind: string }]) => setFileHandle(data[0].name))
            }
        }}>
            <span className={'text-white text-[16px] text-start truncate'}>
                {
                    (fileHandle === '')
                        ? 'No file chosen Upload a Request For Proposal (Optional)'
                        : fileHandle
                }
            </span>
            <span className={'text-white'}><IconComponent name={'up-arrow'} size={16} /></span>
        </button>
    );
}