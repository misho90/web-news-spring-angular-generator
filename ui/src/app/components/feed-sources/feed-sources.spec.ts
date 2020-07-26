import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RssFeedSourcesComponet } from "src/app/components/feed-sources/feed-sources.component";



describe('RssFeedSourcesComponet', () => {
  let component: RssFeedSourcesComponet;
  let fixture: ComponentFixture<RssFeedSourcesComponet>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RssFeedSourcesComponet ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RssFeedSourcesComponet);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
