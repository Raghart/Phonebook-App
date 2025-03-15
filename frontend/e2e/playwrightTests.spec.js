import { test, expect } from '@playwright/test';

test('front page is visible', async ({ page }) => {
  await page.goto('http://localhost:5173/')
  
  await expect(page.getByText('Phonebook')).toBeVisible()
  await expect(page.getByText('Add a New Person')).toBeVisible()
  await expect(page.getByText('Numbers')).toBeVisible()
  await expect(page.getByText('filter shown with')).toBeVisible()
  await expect(page.getByRole('button').getByText('add')).toBeVisible()
  await expect(page.getByRole('button').getByText('Delete').first()).toBeVisible()

  await expect(page.getByText('Arto Vihavainen 045-1232456')).toBeVisible()
  await expect(page.getByText('Arto Hellas 040-12345678')).toBeVisible()
  await expect(page.getByText('Ada Lovelace 39-44-5323523')).toBeVisible()
  await expect(page.getByText('Dan Abramov 12-43-234345')).toBeVisible()
  
});

test('filter is working', async ({ page }) => {
  await page.goto('http://localhost:5173/')
  
  const input = page.getByTestId('inputFilter')

  await input.fill('Arto Vihavainen')

  await expect(page.getByText('Arto Vihavainen 045-1232456')).toBeVisible()
  await expect(page.getByText('Arto Hellas 040-12345678')).not.toBeVisible()
});

test('adding a name in the workbook is working', async ({ page }) => {
  await page.goto('http://localhost:5173/');
  
  const inputName = page.getByTestId('inputName');
  const inputNumber = page.getByTestId('inputNumber');
  const addButton = page.getByTestId('addButton');

  await inputName.fill('Testing name');
  await inputNumber.fill('123-456789');

  await addButton.click();

  await expect(page.getByText('Testing name 123-456789').first()).toBeVisible();
});


