import { Layout } from './Layout/Layout';
import { GlobalStyle } from './GlobalStyle';
import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import * as API from 'services/api';
import ContentLoader from 'react-content-loader';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { LoadMoreBtn } from './Button/Button';

export class App extends Component {
  state = {
    gallery: [],
    searchValue: '',
    page: 1,
    isLoading: false,
  };
  async componentDidUpdate(_, prevState) {
    const { gallery, searchValue, page } = this.state;
    if (prevState.searchValue !== searchValue || prevState.page !== page) {
      try {
        this.setState({ isLoading: true });
        const fetchImages = await API.getImages(searchValue, page);
        this.setState(state => ({
          gallery: [...gallery, ...fetchImages.hits],
        }));
      } catch (error) {
        console.log(error);
      } finally {
        this.setState({ isLoading: false });
      }
    }
  }

  onSubmit = value => {
    try {
      if (value === this.state.searchValue) {
        return;
      }
      this.setState({ searchValue: value, gallery: [] });
    } catch (err) {}
  };

  LoadMore = () => {
    this.setState(state => ({ page: state.page + 1 }));
  };

  render() {
    const { gallery, isLoading } = this.state;
    return (
      <Layout>
        <Searchbar onSubmit={this.onSubmit} />
        {isLoading && (
          <ContentLoader
            viewBox="0 0 400 160"
            height={60}
            width={100}
            backgroundColor="maroon"
            foregroundColor="orange"
            style={{ width: '100%', marginTop: '0' }}
            interval={0.1}
          >
            <circle cx="100" cy="20" r="20" />
            <circle cx="194" cy="20" r="20" />
            <circle cx="288" cy="20" r="20" />
          </ContentLoader>
        )}
        <ImageGallery values={gallery} />
        {gallery.length !== 0 && <LoadMoreBtn onClick={this.LoadMore} />}
        <GlobalStyle />
      </Layout>
    );
  }
}
