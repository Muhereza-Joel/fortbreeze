<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Spatie\Sitemap\Sitemap;
use Spatie\Sitemap\Tags\Url;

class GenerateSitemap extends Command
{
    protected $signature = 'sitemap:generate';
    protected $description = 'Generate sitemap for the site';

    public function handle()
    {
        $sitemap = Sitemap::create();

        // List all public routes manually
        $routes = [
            '/',
            '/home',
            '/about-us',
            '/our-services',
            '/rooms',
            '/restaurant-and-bar',
            '/contact-us',
            '/booking',
            '/privacy-policy',
            '/terms-of-service',
            '/frequently-asked-questions',
            '/careers',
        ];

        foreach ($routes as $route) {
            $sitemap->add(
                Url::create($route)
                    ->setPriority(0.8)              // optional
                    ->setChangeFrequency(Url::CHANGE_FREQUENCY_WEEKLY) // optional
            );
        }

        // Save sitemap to public folder
        $sitemap->writeToFile(public_path('sitemap.xml'));

        $this->info('Sitemap generated successfully at /public/sitemap.xml');
    }
}
