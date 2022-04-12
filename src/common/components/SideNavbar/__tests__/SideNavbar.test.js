import React from 'react'
import {act, render, screen, fireEvent} from '@testing-library/react'
import SideNavbar from '../SideNavbar'
import data from "./mock.json"
import { BrowserRouter } from 'react-router-dom';

describe('Navigation Component', () => {
	
	it('should render default', () => {
		render(<BrowserRouter><SideNavbar data={data} /></BrowserRouter> );
		expect(screen.getByTestId('navigation-skeleton')).toBeInTheDocument();
		expect(screen.getByTestId('navigation-toggle-icon')).toBeInTheDocument();
        expect(screen.getByTestId('navigation-toggle-icon')).toBeInTheDocument();

        for (let i = 0; i < data.length; i++) {
            const id = `${data[i].id}-list`;
            expect(screen.getByTestId(id)).toBeInTheDocument();
        }        
	});

    it('should render full menu', () => {
		render(<BrowserRouter><SideNavbar data={data} /></BrowserRouter> );
        expect(screen.getByTestId('navigation-skeleton')).toBeInTheDocument();
        fireEvent.click(screen.getByTestId('navigation-toggle-icon'));

        for (let i = 0; i < data.length; i++) {
            const id = `${data[i].id}-menu-label`;
            expect(screen.getByTestId(id)).toBeInTheDocument();
        } 

       
	});

    it('should render sub menu', () => {
		render(<BrowserRouter><SideNavbar data={data} /></BrowserRouter> );
        expect(screen.getByTestId('navigation-skeleton')).toBeInTheDocument();
        fireEvent.click(screen.getByTestId('navigation-toggle-icon'))

        for (let i = 0; i < data.length; i++) {
            const id = `${data[i].id}`;
            fireEvent.click(screen.getByTestId(id))
            if(data[i].children && data[i].children.length > 0 && data[i].children[0].title){
                const childId = `${data[i].children[0].id}-menu-label`
                expect(screen.getByTestId(childId)).toBeInTheDocument();
            }            
        }

        
        
       
	});

    it('should menu able to toggle between icon to full menu', () => {
		render(<BrowserRouter><SideNavbar data={data} /></BrowserRouter> );
        expect(screen.getByTestId('navigation-skeleton')).toBeInTheDocument();
        fireEvent.click(screen.getByTestId('navigation-toggle-icon'));

        for (let i = 0; i < data.length; i++) {
            const id = `${data[i].id}-menu-label`;
            expect(screen.getByTestId(id)).toBeInTheDocument();
        } 

        fireEvent.click(screen.getByTestId('navigation-toggle-icon'));

        for (let i = 0; i < data.length; i++) {
            const id = `${data[i].id}-menu-label`;
            expect(screen.queryByTestId(id)).not.toBeInTheDocument();
        } 

       
	});
});
