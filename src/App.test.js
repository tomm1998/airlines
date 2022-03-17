import { render, screen, fireEvent, act,waitFor } from '@testing-library/react';
import App from './App';
import fetchJsonp from 'fetch-jsonp';


jest.mock('fetch-jsonp');

test('renders app', async () => {
    fetchJsonp.mockResolvedValue({json: () => []});
     act( () => {
      render(<App />)});    
    const title = screen.getByText("Airlines");
    await waitFor(() => { expect(title).toBeInTheDocument()});
})

test('filter checkbox ok', async () => {
    fetchJsonp.mockResolvedValue({ json: () => [{
      "site": "https://www.alaskaair.com",
      "code": "AS",
      "alliance": "OW",
      "phone": "+1 800 252 75 22",
      "name": "Alaska Airlines",
      "logoURL": "/rimg/provider-logos/airlines/v/AS.png?crop=false&width=108&height=92&fallback=default2.png&_v=7e7c4110616a97db4d99676711cb7247"
    }]});
    act( () => {
      render(<App />)}
    );
    const checkbox = screen.getByTestId("OW");
    act(  () => { fireEvent.change(checkbox)});
    await waitFor(() => { expect( screen.getByText('Alaska Airlines')).toBeInTheDocument()});
});

test('filter ', async () => {
  fetchJsonp.mockResolvedValue({ json: () => [{
    "site": "https://www.alaskaair.com",
    "code": "AS",
    "alliance": "OW",
    "phone": "+1 800 252 75 22",
    "name": "Alaska Airlines",
    "logoURL": "/rimg/provider-logos/airlines/v/AS.png?crop=false&width=108&height=92&fallback=default2.png&_v=7e7c4110616a97db4d99676711cb7247"
  }]});
  act( () => {
    render(<App />)
  });
  const checkbox = screen.getByTestId("ST");
  act( () => { 
    fireEvent.change(checkbox) 
  });
  await waitFor(() => { 
    expect(screen.queryByText('Alaska Airlines')).not.toBeInTheDocument()
  });
});