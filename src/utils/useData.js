import React, { useState, useEffect } from 'react';

export async function fetchData(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
      console.log(error)
        throw new Error('Error fetching data:', error.message);
    }
}
