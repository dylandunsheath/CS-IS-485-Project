import React from "react";
import MetadataSection from "../components/MetadataSection";

const MetadataSectionPage = ({ onNext }) => {
    return (
        <div>
            <MetadataSection onNext={onNext} />
        </div>
    );
};

export default MetadataSectionPage;
