import React from 'react';
import Head from "next/head";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import * as Realm from "realm-web";

import Header from "../../components/Header";
import Container from "../../components/Container";
import Footer from "../../components/Footer";
import DefinitionDetail from "../../components/ProductDetail";

export const DefinitionDetails = () => {
    const [definition, setDefinition] = useState();
    const { query } = useRouter();

    return (
        <div>

        </div>
    );
};

export default DefinitionDetails;