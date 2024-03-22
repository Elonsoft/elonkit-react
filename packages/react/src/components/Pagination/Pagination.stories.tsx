import { useState } from 'react';

import { Meta, StoryObj } from '@storybook/react';

import { Pagination } from './Pagination';
import { PaginationPages } from './PaginationPages';
import { PaginationRange } from './PaginationRange';

const meta: Meta<typeof Pagination> = {
  tags: ['autodocs'],
  component: Pagination,
  parameters: {
    references: ['Pagination', 'PaginationPages', 'PaginationRange']
  },
  argTypes: {
    itemsPerPage: {
      table: {
        disable: true
      }
    },
    page: {
      table: {
        disable: true
      }
    }
  },
  args: {
    count: 100
  }
};

export default meta;
type Story = StoryObj<typeof Pagination>;

export const Demo: Story = {
  render: function Render({ count }) {
    const [page, setPage] = useState(1);

    const [itemsPerPage, setItemsPerPage] = useState(10);

    const onItemsPerPageChange = (event: number) => {
      setItemsPerPage(event);
    };

    const onPageChange = (page: number) => {
      setPage(page);
    };

    return (
      <Pagination
        count={count}
        itemsPerPage={itemsPerPage}
        page={page}
        onItemsPerPageChange={onItemsPerPageChange}
        onPageChange={onPageChange}
      >
        <PaginationRange />
        <PaginationPages />
      </Pagination>
    );
  }
};
