import { Badge } from 'lucide-react';
import React, { useState } from 'react';

export function EngineeringSet() {

    function UploadEverywhere(num) {
        return (
            <div key={num} className="space-y-3">
                <div className="flex items-center justify-between mb-2">
                    <span className="text-sm">choose file {num}</span>
                    <label className="px-3 py-1 bg-gray-700 text-gray-300 text-xs rounded cursor-pointer hover:bg-gray-600 transition-colors">
                        BROWSE
                        <input
                            type="file"
                            className="hidden"
                            accept=".pdf"
                            onChange={handleFileChange(num)}
                        />
                    </label>
                </div>

                <div className="text-orange-600 text-center text-sm mb-3 font-mono">
                    {selectedFiles[`file${num}`]?.name || 'NO FILE SELECTED'}
                </div>

                <div className="space-y-2">
                    <div className={`w-full px-3 py-1.5 text-sm border rounded text-center ${getStatusStyle(uploadStatus[`file${num}`].tecDrive)}`}>
                        tec-drive {uploadStatus[`file${num}`].tecDrive === 'uploading' && '...'}
                    </div>
                    <div className={`w-full px-3 py-1.5 text-sm border rounded text-center ${getStatusStyle(uploadStatus[`file${num}`].companyDrive)}`}>
                        company-drive {uploadStatus[`file${num}`].companyDrive === 'uploading' && '...'}
                    </div>
                    <div className={`w-full px-3 py-1.5 text-sm border rounded text-center ${getStatusStyle(uploadStatus[`file${num}`].bim360)}`}>
                        bim360 {uploadStatus[`file${num}`].bim360 === 'uploading' && '...'}
                    </div>
                </div>
            </div>
        )
    }

    const [email, setEmail] = useState('');
    const [notes, setNotes] = useState('');
    const [selectedFiles, setSelectedFiles] = useState({
        file1: null,
        file2: null,
        file3: null
    });

    // Upload status for each file and location
    const [uploadStatus, setUploadStatus] = useState({
        file1: { tecDrive: 'pending', companyDrive: 'pending', bim360: 'pending' },
        file2: { tecDrive: 'pending', companyDrive: 'pending', bim360: 'pending' },
        file3: { tecDrive: 'pending', companyDrive: 'pending', bim360: 'pending' }
    });

    const handleFileChange = (fileNumber) => (event) => {
        setSelectedFiles({
            ...selectedFiles,
            [`file${fileNumber}`]: event.target.files[0]
        });

        // Simulate upload process when file is selected
        if (event.target.files[0]) {
            // Set all statuses to uploading
            setUploadStatus(prev => ({
                ...prev,
                [`file${fileNumber}`]: {
                    tecDrive: 'uploading',
                    companyDrive: 'uploading',
                    bim360: 'uploading'
                }
            }));

            // Simulate successful upload after delay
            setTimeout(() => {
                setUploadStatus(prev => ({
                    ...prev,
                    [`file${fileNumber}`]: {
                        tecDrive: 'uploaded',
                        companyDrive: 'uploaded',
                        bim360: 'uploaded'
                    }
                }));
            }, 2000);
        }
    };

    const getStatusStyle = (status) => {
        switch (status) {
            case 'uploaded':
                return 'bg-green-900 text-green-300 border-green-700';
            case 'uploading':
                return 'bg-yellow-900 text-yellow-300 border-yellow-700';
            case 'failed':
                return 'bg-red-900 text-red-300 border-red-700';
            default:
                return 'bg-gray-900 text-gray-500 border-gray-700';
        }
    };

    return (
        <div className="min-h-screen p-4">
            <div className="max-w-5xl mx-auto border-2 border-gray-600 rounded-lg">
                {/* Header */}
                <div className="border-b-2 border-gray-600 p-4">
                    <h1 className="text-center text-blue-400 text-xl font-bold tracking-wider">
                        ENGINEERING - DRAWING SET
                    </h1>
                    <Badge className="h-5 min-w-5 rounded-full px-1 font-mono tabular-nums">
                        8
                    </Badge>
                </div>

                {/* Content */}
                <div className="p-6">

                    {/* File Selection Grid */}
                    <div className="grid grid-cols-3 gap-6 mb-8">
                        {[1, 2, 3].map((num) => (
                            UploadEverywhere(num)
                        ))}
                    </div>

                    {/* Email Section */}
                    <div className="mb-6">
                        <div className="flex items-center gap-4 mb-4">
                            <label className="text-gray-400 text-sm">Email</label>
                            <button className="px-4 py-1 bg-green-700 text-green-100 text-sm border border-green-600 rounded hover:bg-green-600 transition-colors">
                                NEW
                            </button>
                            <button className="px-4 py-1 bg-orange-600 text-sm border border-orange-500 rounded hover:bg-orange-700 transition-colors">
                                dd-mm-yy
                            </button>
                        </div>
                    </div>

                    {/* Notes Section */}
                    <div>
                        <label className="text-sm block mb-2">Notes</label>
                        <textarea
                            value={notes}
                            onChange={(e) => setNotes(e.target.value)}
                            className="w-full h-32 px-3 py-2 border border-gray-600 rounded focus:outline-none focus:border-blue-500 resize-none"
                            placeholder="Enter your notes here..."
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
